"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ToggleUnits = dynamic(() => import("./ToggleUnits"), {
  ssr: false,
  loading: () => null,
});

export default function Settings() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Settings"
          className="bg-gradient border-gray-500/5 duration-300 hover:bg-accent/30"
          onClick={() => setOpen(true)}
        >
          <SettingsIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gradient space-y-1 border-gray-500/5 backdrop-blur-[2px]"
        align="end"
      >
        {open && (
          <>
            <DropdownMenuLabel>Settings:</DropdownMenuLabel>
            <DropdownMenuLabel>
              <ToggleUnits />
            </DropdownMenuLabel>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
