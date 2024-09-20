"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import useSearchDialog from "@/hooks/useSearchDialog";
import SUGGESTED_CITIES from "@/utils/constants";

export default function SearchDialog() {
  const { open, setOpen } = useSearchDialog();
  return (
    <>
      <Button
        variant="outline"
        className="w-80 justify-between rounded-lg border p-3 tracking-wide text-muted-foreground shadow-sm"
        size="lg"
        onClick={() => setOpen(true)}
      >
        Search for a city...
        <CommandShortcut>⌘F</CommandShortcut>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for a city..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {SUGGESTED_CITIES.map((city) => (
              <CommandItem key={city.name}>{city.name}</CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
