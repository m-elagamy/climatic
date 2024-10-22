import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

import useToggleStateContext from "@/hooks/useToggleStateContext";
import useCitySearch from "@/hooks/useCitySearch";
import useDebounce from "@/hooks/useDebounce";
import useCitySelect from "@/hooks/useCitySelect";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { listVariants } from "@/utils/motionVariants";
const ErrorMessage = dynamic(() => import("./ErrorMessage"), {
  ssr: false,
});
import {
  CommandDialog,
  CommandGroup,
  CommandList,
} from "@/components/ui/command";
import CommandInput from "./CommandInput";
import DotLoader from "@/components/ui/loading-indicators/DotLoader";
import { DialogDescription } from "@/components/ui/dialog";
import NoResultMessage from "./NoResultMessage";
import CitySearchResults from "./CitySearchResults";
import SuggestedCities from "./SuggestedCities";
import GroupHeading from "./GroupHeading";
import SearchHistory from "./SearchHistory";
import type { Location } from "@/types/WeatherFlags";

const Dialog = () => {
  const [input, setInput] = useState("");
  const { isOpen, setIsOpen } = useToggleStateContext();
  const debouncedInput = useDebounce(input, 600);
  const { cities, isLoading, isError } = useCitySearch(debouncedInput);
  const { handleCitySelect } = useCitySelect(setIsOpen);
  const [searchHistoryResults, setSearchHistoryResults] =
    useLocalStorage<Partial<Location>[]>("search-history");

  // Reset input when dialog is closed
  useEffect(() => {
    if (!isOpen) {
      setInput("");
    }
  }, [isOpen]);

  const handleRemoveCity = useCallback(
    (e: React.MouseEvent, cityToRemove: Partial<Location>) => {
      e.stopPropagation();

      console.log("cityToRemove", cityToRemove);

      const newSearchHistory = searchHistoryResults?.filter(
        (result) =>
          result.lat !== cityToRemove.lat && result.lon !== cityToRemove.lon,
      );

      setSearchHistoryResults(newSearchHistory ?? []);
    },
    [searchHistoryResults, setSearchHistoryResults],
  );

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogDescription className="sr-only">
        Search for a city
      </DialogDescription>
      <CommandInput input={input} setInput={setInput} />
      <CommandList className="relative min-h-[68px]">
        {isLoading && <DotLoader />}
        {isError && <ErrorMessage />}

        {cities.length === 0 && debouncedInput !== "" && !isLoading && (
          <NoResultMessage />
        )}

        <AnimatePresence mode="wait">
          <motion.ul
            key={debouncedInput === "" ? "suggested-cities" : "search-history"}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {debouncedInput === "" &&
              (!searchHistoryResults || searchHistoryResults.length === 0) && (
                <SuggestedCities handleCitySelect={handleCitySelect} />
              )}

            {searchHistoryResults &&
              searchHistoryResults?.length > 0 &&
              debouncedInput === "" && (
                <SearchHistory
                  searchHistoryResults={searchHistoryResults}
                  handleCitySelect={handleCitySelect}
                  handleRemoveCity={handleRemoveCity}
                />
              )}

            {cities.length > 0 && (
              <CommandGroup heading={<GroupHeading />}>
                {cities.map((city: Location) => (
                  <CitySearchResults
                    key={city.id}
                    handleCitySelect={handleCitySelect}
                    city={city}
                  />
                ))}
              </CommandGroup>
            )}
          </motion.ul>
        </AnimatePresence>
      </CommandList>
    </CommandDialog>
  );
};
export default Dialog;
