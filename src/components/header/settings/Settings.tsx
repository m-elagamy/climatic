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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(false);
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Settings"
          className="bg-gradient border-none shadow-lg duration-300 hover:bg-accent/25"
        >
          <SettingsIcon size={16} />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent
          className="bg-gradient space-y-1 border-none backdrop-blur-sm"
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
