"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import useSearchDialog from "@/hooks/useSearchDialog";
import { SUGGESTED_CITIES } from "@/utils/constants";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import SearchButton from "./SearchButton";

export default function SearchDialog() {
  const { open, setOpen } = useSearchDialog();
  const router = useRouter();

  const handleCityChange = useCallback(
    (newCity: string) => {
      setOpen(false);
      try {
        router.push(`/?city=${newCity}`);
      } catch (error) {
        console.error(`Error navigating to ${newCity}:`, error);
      }
    },
    [router, setOpen],
  );

  return (
    <>
      <SearchButton setOpen={setOpen}></SearchButton>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for a city..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {SUGGESTED_CITIES.map((city) => (
              <CommandItem
                key={city.name}
                onSelect={() => handleCityChange(city.name)}
                className="city-option"
              >
                {city.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
