"use client";
import {
  DesktopIcon,
  InfoCircledIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function ToggleTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="space-y-1 *:flex *:items-center *:gap-1 *:p-1"
      >
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
        <TooltipProvider>
          <Tooltip>
            <DropdownMenuItem
              className={`${theme === "system" ? (systemTheme === "light" ? "bg-slate-100" : "bg-neutral-800") : ""}`}
              onClick={() => setTheme("system")}
              aria-label="System theme"
            >
              <DesktopIcon /> System
              <TooltipTrigger asChild>
                <InfoCircledIcon className="ml-auto hover:cursor-help" />
              </TooltipTrigger>
            </DropdownMenuItem>
            <TooltipContent>
              <p>
                This option follows your system&#39;s light or dark mode
                settings.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
