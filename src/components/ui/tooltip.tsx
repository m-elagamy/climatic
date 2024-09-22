"use client";

import type { ReactNode } from "react";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 max-w-80 overflow-hidden rounded-md bg-primary/70 px-2 py-1.5 text-sm text-primary-foreground shadow backdrop-blur-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const ToolTip = ({
  tooltipTrigger,
  tooltipContent,
  children,
}: {
  tooltipTrigger: ReactNode;
  tooltipContent: string | ReactNode;
  children?: ReactNode;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        {children}
        <TooltipTrigger
          asChild
          className="cursor-help text-blue-600 dark:text-blue-400"
        >
          {tooltipTrigger}
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default ToolTip;
