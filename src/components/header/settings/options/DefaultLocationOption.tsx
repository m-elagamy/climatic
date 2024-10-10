import { Save, Star, Trash2, Loader2 } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import useDefaultLocation from "@/hooks/useDefaultLocation";

const DefaultLocationOption = () => {
  const { isLoading, saveLocation, removeLocation, userDefaultLocation } =
    useDefaultLocation();

  return (
    <div className="relative">
      {!userDefaultLocation && (
        <DropdownMenuItem className="gap-2" onSelect={() => saveLocation()}>
          <Save size={16} /> Save Location
        </DropdownMenuItem>
      )}

      {!!userDefaultLocation && (
        <DropdownMenuLabel className="flex gap-2">
          <Star size={16} />
          {userDefaultLocation.city}
        </DropdownMenuLabel>
      )}

      <div className="absolute right-2 top-2">
        {!userDefaultLocation && (
          <ToolTip
            tooltipTrigger={<InfoCircledIcon className="size-4" />}
            tooltipContent={
              <p>
                This option saves the currently selected city as your default
                location.
              </p>
            }
          />
        )}
        {!!userDefaultLocation && (
          <button
            className="cursor-pointer"
            onClick={removeLocation}
            title="Remove default location"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Trash2
                size={16}
                className="text-red-500 transition-colors hover:text-red-600"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default DefaultLocationOption;
