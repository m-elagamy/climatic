"use client";

import { SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import DotLoader from "@/components/ui/loading-indicators/DotLoader";
import { useLocalStorage } from "@/hooks/useLocalStorage";
const SettingsOptions = dynamic(() => import("./SettingsOptions"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[64px]">
      <DotLoader />
    </div>
  ),
});

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useLocalStorage(
    "has-settings-animated",
    false,
  );

  const handleOnOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setHasAnimated(false);
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOnOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Settings"
          className="bg-gradient border-none duration-300 hover:bg-accent/30"
          onClick={handleOnOpenChange}
        >
          <SettingsIcon size={16} />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent
          className="bg-gradient space-y-1 border-none backdrop-blur"
          align="end"
        >
          <DropdownMenuLabel>Settings:</DropdownMenuLabel>
          <SettingsOptions
            hasAnimated={hasAnimated}
            setHasAnimated={setHasAnimated}
          />
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
