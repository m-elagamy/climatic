"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import useSearchDialogContext from "@/hooks/useSearchDialog";
import useCitySearch from "@/hooks/useCitySearch";
import useDebounce from "@/hooks/useDebounce";
import useCityChange from "@/hooks/useCityChange";
import { listVariants } from "@/utils/motionVariants";
import {
  CommandDialog,
  CommandGroup,
  CommandList,
} from "@/components/ui/command";
import CommandInput from "./CommandInput";
import DotLoader from "@/components/ui/loading-indicators/DotLoader";
import ErrorMessage from "./ErrorMessage";
import NoResultMessage from "./NoResultMessage";
import CitySearchResults from "./CitySearchResults";
import SuggestedCities from "./SuggestedCities";

import type { Location } from "@/types/WeatherFlags";

const Dialog = () => {
  const [input, setInput] = useState("");
  const { open, setOpen } = useSearchDialogContext();
  const debouncedInput = useDebounce(input);
  const { cities, isLoading, isError } = useCitySearch(debouncedInput);
  const { handleCityChange } = useCityChange(setOpen);

  // Reset input when dialog is closed
  useEffect(() => {
    if (!open) {
      setInput("");
    }
  }, [open]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput input={input} setInput={setInput} />
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
