import { Save } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const DefaultLocationOption = () => {
  return (
    <div className="relative">
      <DropdownMenuItem className="gap-2">
        <Save size={16} />
        Save Location
      </DropdownMenuItem>
      <div className="absolute right-2 top-2">
        <ToolTip
          tooltipTrigger={<InfoCircledIcon className="size-4" />}
          tooltipContent={
            <p>
              This option saves the currently selected city as your default
              location.
            </p>
          }
        />
      </div>
    </div>
  );
};
export default DefaultLocationOption;
