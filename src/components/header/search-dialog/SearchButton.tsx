import useToggleStateContext from "@/hooks/useToggleStateContext";
import { Button } from "@/components/ui/button";
import { CommandShortcut } from "@/components/ui/command";

export default function SearchButton() {
  const { setIsOpen } = useToggleStateContext();

  return (
    <Button
      variant="outline"
      className="bg-gradient w-72 justify-between rounded-lg border-none p-3 tracking-wide text-muted-foreground shadow-lg backdrop-blur-sm duration-300 hover:bg-accent/30"
      onClick={() => setIsOpen(true)}
      aria-label="Search for a city"
    >
      Search for a city...
      <CommandShortcut className="hidden lg:inline">⌘F</CommandShortcut>
    </Button>
  );
}
