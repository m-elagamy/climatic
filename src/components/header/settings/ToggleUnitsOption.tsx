"use client";

import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useUnitsContext from "@/hooks/useUnitsContext";

const ToggleUnits = () => {
  const { isImperial, toggleUnitPreference, isLoading } = useUnitsContext();

  if (isLoading) return null;

  return (
    <DropdownMenuLabel className="rounded-sm hover:bg-accent/30">
      <div className="flex items-center justify-between">
        <Label
          htmlFor="ToggleUnits"
          className={`cursor-pointer ${
            isImperial ? "text-accent-foreground" : "text-muted-foreground"
          }`}
        >
          Enable Imperial Units
        </Label>
        <Switch
          id="ToggleUnits"
          title="Toggle Units"
          checked={isImperial}
          onCheckedChange={toggleUnitPreference}
        />
      </div>
    </DropdownMenuLabel>
  );
};
export default ToggleUnits;
