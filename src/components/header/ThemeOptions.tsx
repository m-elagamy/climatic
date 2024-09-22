"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import { Palette } from "lucide-react";
import {
  DesktopIcon,
  InfoCircledIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export default function ThemeOptions() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Palette size={16} className="mr-1" /> Theme Options
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent className="space-y-1 *:flex *:items-center *:gap-1">
          <DropdownMenuItem
            className={`${theme === "light" ? "bg-slate-100" : ""}`}
            onClick={() => setTheme("light")}
            aria-label="Light theme"
          >
            <SunIcon /> Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${theme === "dark" ? "bg-neutral-800" : ""}`}
            onClick={() => setTheme("dark")}
            aria-label="Dark theme"
          >
            <MoonIcon /> Dark
          </DropdownMenuItem>
          <ToolTip
            tooltipTrigger={
              <InfoCircledIcon className="absolute -translate-y-[27px] translate-x-[98px] text-blue-600 hover:cursor-help dark:text-blue-400" />
            }
            tooltipContent="This option follows your system's light or dark mode settings."
          >
            <DropdownMenuItem
              className={`flex w-full items-center gap-1 ${theme === "system" ? (systemTheme === "light" ? "bg-slate-100" : "bg-neutral-800") : ""} `}
              onClick={() => setTheme("system")}
              aria-label="System theme"
            >
              <DesktopIcon /> System
            </DropdownMenuItem>
          </ToolTip>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
