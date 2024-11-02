import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { X } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type CommandInputProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  setIsDebounceSkipped: Dispatch<SetStateAction<boolean>>;
};

const CommandInput = ({
  input,
  setInput,
  setIsDebounceSkipped,
}: CommandInputProps) => {
  const commandInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDebounceSkipped(false);
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setIsDebounceSkipped(true);
    setInput("");
    commandInputRef.current?.focus();
  };

  return (
    <div className="flex items-center border-b border-gray-500/20 px-3">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        ref={commandInputRef}
        id="search"
        type="text"
        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Which city are you looking for?"
        autoComplete="off"
        value={input}
        onChange={handleInputChange}
      />
      {input.length > 0 && (
        <Button
          variant="outline"
          className="p- absolute right-12 top-[8px] h-6 bg-transparent p-1 hover:bg-accent/25"
          onClick={handleClearInput}
          title="Clear search"
        >
          <X size={14} />
        </Button>
      )}
    </div>
  );
};
export default CommandInput;
