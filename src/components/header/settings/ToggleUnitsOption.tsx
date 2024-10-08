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
      <div className="flex items-center space-x-2">
        <Label htmlFor="ToggleUnits" className="min-w-[144px] cursor-pointer">
          {isImperial ? "Disable" : "Enable"} Imperial Units
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
