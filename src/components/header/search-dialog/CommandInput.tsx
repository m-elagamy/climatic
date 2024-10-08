import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type { Dispatch, SetStateAction } from "react";

const CommandInput = ({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center border-b border-gray-200/5 px-3">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search for a city..."
        autoComplete="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
export default CommandInput;
