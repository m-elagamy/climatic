"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import useSearchDialog from "@/hooks/useSearchDialog";
import useCitySearch from "@/hooks/useCitySearch";
import useDebounce from "@/hooks/useDebounce";
import useCityChange from "@/hooks/useCityChange";
import SearchButton from "./SearchButton";
import CommandInput from "./CommandInput";
import SuggestedCities from "./SuggestedCities";
import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";

import type { Location } from "@/types/WeatherFlags";

export default function SearchDialog() {
  const { open, setOpen } = useSearchDialog();

  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 600);
  const { cities, isLoading, isError } = useCitySearch(debouncedInput);

  const { handleCityChange } = useCityChange(setOpen);

  // Reset input when dialog is closed
  useEffect(() => {
    if (!open) {
      setInput("");
    }
  }, [open]);

  return (
    <>
      <SearchButton setOpen={setOpen}></SearchButton>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput input={input} setInput={setInput} />
        <CommandList>
          <CommandGroup>
            {isLoading && <LoadingIndicator />}

            {isError && <ErrorMessage />}

            {debouncedInput && cities.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}

            {cities.length > 0 && (
              <CommandGroup heading="Suggestions">
                {cities.map((city: Location) => (
                  <CommandItem
                    key={city.id}
                    onSelect={() => handleCityChange(city)}
                    className="city-option cursor-pointer"
                  >
                    {city.name}, {city.country}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {debouncedInput.length === 0 && (
              <SuggestedCities handleCityChange={handleCityChange} />
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
