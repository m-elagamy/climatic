import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ToggleUnits = () => {
  return (
    <section>
      <h2 className="sr-only">Toggle Units</h2>
      <div className="flex items-center space-x-2">
        <Switch id="ToggleUnits" title="Toggle Units" />
        <Label htmlFor="ToggleUnits">Enable Imperial Units</Label>
      </div>
    </section>
  );
};
export default ToggleUnits;
