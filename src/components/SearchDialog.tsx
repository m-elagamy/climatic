import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="w-80 justify-between rounded-lg border tracking-wide shadow-md"
        >
          Search for a city...
          <CommandShortcut className="ml-4">⌘F</CommandShortcut>
        </Button>
      </DialogTrigger>
      <DialogContent className="top-1/4 max-w-[350px] p-0">
        <Command>
          <CommandInput
            className="tracking-wide"
            placeholder="Search for a city..."
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions:">
              <CommandItem> San Francisco </CommandItem>
              <CommandItem> Los Angeles </CommandItem>
              <CommandItem> New York </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
