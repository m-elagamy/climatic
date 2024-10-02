"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useSearchDialog from "@/hooks/useSearchDialog";
import { SUGGESTED_CITIES } from "@/utils/constants";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import SearchButton from "./SearchButton";
import useCitySearch from "@/hooks/useCitySearch";
import useDebounce from "@/hooks/useDebounce";
import type { Location } from "@/types/WeatherFlags";
import { motion } from "framer-motion";
import CommandInput from "./CommandInput";

export default function SearchDialog() {
  const router = useRouter();
  const { open, setOpen } = useSearchDialog();

  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 600);
  const { cities, isLoading, isError } = useCitySearch(debouncedInput);

  const handleCityChange = useCallback(
    (selectedCity: Location) => {
      setOpen(false);
      try {
        router.push(`/?city=${encodeURIComponent(selectedCity.name) ?? ""}`);
      } catch (error) {
        console.error(
          `Error navigating to ${encodeURIComponent(selectedCity.name)}:`,
          error,
        );
      }
    },
    [router, setOpen],
  );

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
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Loading...
              </motion.div>
            )}
            {isError && <div>Error fetching cities</div>}

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
              <CommandGroup heading="Suggestions">
                {SUGGESTED_CITIES.map((city) => (
                  <CommandItem
                    key={city.name}
                    onSelect={() => handleCityChange(city)}
                    className="city-option"
                  >
                    {city.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
