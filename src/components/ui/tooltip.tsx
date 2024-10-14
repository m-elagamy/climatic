"use client";

import type { ReactNode } from "react";
import * as React from "react";
import { createPortal } from "react-dom";

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
      "max-w-72 overflow-hidden rounded-md bg-primary/90 px-2 py-1.5 text-xs text-primary-foreground shadow animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);
  const [isClientSide, setIsClientSide] = React.useState(false);

  const handleClick = () => {
    setTooltipVisible(true);
  };

  React.useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={isTooltipVisible} onOpenChange={setTooltipVisible}>
        {children}
        <TooltipTrigger
          asChild
          className="cursor-help transition"
          onClick={handleClick}
        >
          {tooltipTrigger}
        </TooltipTrigger>
        {isClientSide &&
          createPortal(
            <TooltipContent>{tooltipContent}</TooltipContent>,
            document.body,
          )}
      </Tooltip>
    </TooltipProvider>
  );
};
export default ToolTip;
