"use client";

import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useUnitsContext from "@/hooks/useUnitsContext";

const ToggleUnitsOption = () => {
  const { isImperial, toggleUnitPreference, isLoading } = useUnitsContext();

  if (isLoading) return null;

  return (
    <DropdownMenuLabel className="flex items-center justify-between rounded-sm hover:bg-accent/30">
      <Label
        htmlFor="ToggleUnits"
        className={`w-full cursor-pointer ${
          isImperial ? "text-accent-foreground" : "text-muted-foreground"
        } font-bold`}
      >
        &#176;F
      </Label>
      <Switch
        id="ToggleUnits"
        title="Toggle Units"
        checked={isImperial}
        onCheckedChange={toggleUnitPreference}
      />
    </DropdownMenuLabel>
  );
};
export default ToggleUnitsOption;
