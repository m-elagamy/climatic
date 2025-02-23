import { Search } from "lucide-react";
import useToggleStateContext from "@/hooks/useToggleStateContext";
import { Button } from "@/components/ui/button";
import { CommandShortcut } from "@/components/ui/command";

export default function SearchButton() {
  const { setIsOpen } = useToggleStateContext();

  return (
    <Button
      variant="outline"
      className="bg-gradient w-72 justify-between gap-2 rounded-lg border-none p-3 tracking-wide text-muted-foreground shadow-md duration-300 hover:bg-accent/10"
      onClick={() => setIsOpen(true)}
      aria-label="Find a city"
    >
      <Search size={14} />
      Find a city
      <CommandShortcut className="hidden lg:inline">⌘F</CommandShortcut>
    </Button>
  );
}
