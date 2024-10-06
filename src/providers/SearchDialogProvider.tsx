"use client";

import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useMemo,
} from "react";

type SearchDialogContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchDialogContext = createContext<SearchDialogContextType | null>(null);

export const SearchDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const value = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open],
  );

  return (
    <SearchDialogContext.Provider value={value}>
      {children}
    </SearchDialogContext.Provider>
  );
};
export default SearchDialogContext;
