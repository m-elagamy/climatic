import { useSearchParams } from "next/navigation";
import { Save, Star, Trash2 } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import { ToastAction } from "@/components/ui/toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/useToast";

const DefaultLocationOption = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const { toast } = useToast();
  const [defaultLocation, setDefaultLocation] =
    useLocalStorage("default-location");

  const handleSelect = () => {
    setDefaultLocation(city);
    toast({
      title: "Location saved",
      description: `Your default location set to ${city}`,
      action: (
        <ToastAction altText="Undo" onClick={handleClick}>
          Undo
        </ToastAction>
      ),
    });
  };

  const handleClick = () => {
    setDefaultLocation(null);
  };

  return (
    <div className="relative">
      {!defaultLocation && (
        <DropdownMenuItem className="gap-2" onSelect={handleSelect}>
          <Save size={16} /> Save Location
        </DropdownMenuItem>
      )}

      {!!defaultLocation && (
        <DropdownMenuLabel className="flex gap-2">
          <Star size={16} />
          {defaultLocation as string}
        </DropdownMenuLabel>
      )}

      <div className="absolute right-2 top-2">
        {!defaultLocation && (
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
        {!!defaultLocation && (
          <button
            className="cursor-pointer"
            onClick={handleClick}
            title="Remove default location"
          >
            <Trash2
              size={16}
              className="text-red-500 transition-colors hover:text-red-600"
            />
          </button>
        )}
      </div>
    </div>
  );
};
export default DefaultLocationOption;
