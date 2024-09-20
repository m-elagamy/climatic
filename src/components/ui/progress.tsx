"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-primary/20 shadow-md",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-3 w-3 rounded-xl bg-primary shadow-lg ring-1 transition-[margin-left] duration-500 ease-in-out"
      style={{ marginLeft: `calc(${value}% - 0.8rem)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
