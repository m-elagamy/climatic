import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ToggleUnits = () => {
  return (
    <section>
      <h2 className="sr-only">Toggle Units</h2>
      <div className="flex items-center space-x-2">
        <Label htmlFor="ToggleUnits" className="cursor-pointer">
          Enable Imperial Units
        </Label>
        <Switch id="ToggleUnits" title="Toggle Units" />
      </div>
    </section>
  );
};
export default ToggleUnits;
