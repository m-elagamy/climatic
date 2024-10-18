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

type ToggleStateContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ToggleStateContext = createContext<ToggleStateContext | null>(null);

export const ToggleStateProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const value = useMemo(
    () => ({
      isOpen: isOpen,
      setIsOpen: setIsOpen,
    }),
    [isOpen],
  );

  return (
    <ToggleStateContext.Provider value={value}>
      {children}
    </ToggleStateContext.Provider>
  );
};
export default ToggleStateContext;
