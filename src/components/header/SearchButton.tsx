import type { Dispatch, SetStateAction } from "react";

import { Button } from "../ui/button";
import { CommandShortcut } from "../ui/command";

export default function SearchButton({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Button
      variant="outline"
      className="w-72 justify-between rounded-lg border p-3 tracking-wide text-muted-foreground shadow-sm"
      onClick={() => setOpen(true)}
      aria-label="Search for a city"
    >
      Search for a city...
      <CommandShortcut>⌘F</CommandShortcut>
    </Button>
  );
}
