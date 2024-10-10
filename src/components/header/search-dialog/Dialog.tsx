import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import useSearchDialogContext from "@/hooks/useSearchDialog";
import useCitySearch from "@/hooks/useCitySearch";
import useDebounce from "@/hooks/useDebounce";
import useCityChange from "@/hooks/useCityChange";
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

import type { Location } from "@/types/WeatherFlags";

const Dialog = () => {
  const [input, setInput] = useState("");
  const { isOpen, setIsOpen } = useSearchDialogContext();
  const debouncedInput = useDebounce(input);
  const { cities, isLoading, isError } = useCitySearch(debouncedInput);
  const { handleCityChange } = useCityChange(setIsOpen);

  // Reset input when dialog is closed
  useEffect(() => {
    if (!open) {
      setInput("");
    }
  }, [isOpen]);

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput input={input} setInput={setInput} />
      <DialogDescription className="sr-only">
        Search for a city
      </DialogDescription>
      <CommandList className="relative min-h-[68px]">
        {isLoading && <DotLoader />}
        {isError && <ErrorMessage />}

        {cities.length === 0 && !isLoading && <NoResultMessage />}

        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          {debouncedInput === "" && (
            <SuggestedCities handleCityChange={handleCityChange} />
          )}

          {cities.length > 0 && (
            <CommandGroup heading="Suggestions:">
              {cities.map((city: Location) => (
                <CitySearchResults
                  key={city.id}
                  handleCityChange={handleCityChange}
                  city={city}
                />
              ))}
            </CommandGroup>
          )}
        </motion.ul>
      </CommandList>
    </CommandDialog>
  );
};
export default Dialog;
