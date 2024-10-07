import useSearchDialogContext from "@/hooks/useSearchDialog";
import { Button } from "@/components/ui/button";
import { CommandShortcut } from "@/components/ui/command";

export default function SearchButton() {
  const { setOpen } = useSearchDialogContext();

  return (
    <Button
      variant="outline"
      className="bg-gradient w-72 justify-between rounded-lg border border-gray-200/5 p-3 tracking-wide text-muted-foreground shadow-sm backdrop-blur-[1px] duration-300 hover:bg-accent/30"
      onClick={() => setOpen(true)}
      aria-label="Search for a city"
    >
      Search for a city...
      <CommandShortcut className="hidden lg:inline">⌘F</CommandShortcut>
    </Button>
  );
}
