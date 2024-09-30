"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useUnitsContext from "@/hooks/useUnitsContext";

const ToggleUnits = () => {
  const { isImperial, toggleUnitPreference, isLoading } = useUnitsContext();

  if (isLoading) return null;

  return (
    <section>
      <h2 className="sr-only">Toggle Units</h2>
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
    </section>
  );
};
export default ToggleUnits;
