import { useSearchParams } from "next/navigation";
import { Save, Star, Trash2, Loader2 } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import { ToastAction } from "@/components/ui/toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/useToast";
import { useState } from "react";
import delay from "@/utils/delay";

const DefaultLocationOption = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const { toast } = useToast();
  const [userDefaultLocation, setUserDefaultLocation] = useLocalStorage<{
    city: string;
    lat: string;
    lon: string;
  } | null>("user-default-location");

  const handleSelect = async () => {
    if (city?.trim && lat?.trim && lon?.trim) {
      setUserDefaultLocation({ city, lat, lon });
      await delay(500);
      toast({
        title: "Location saved",
        description: (
          <p>
            You have saved <strong>{city}</strong> as your default location.
          </p>
        ),
        action: (
          <ToastAction altText="Undo" onClick={handleClick}>
            Undo
          </ToastAction>
        ),
      });
    }
  };

  const handleClick = async () => {
    setIsLoading(true);
    await delay(1000);
    setUserDefaultLocation(null);
    setIsLoading(false);
    toast({
      title: "Location removed",
      description: "Your default location has been removed.",
    });
  };

  return (
    <div className="relative">
      {!userDefaultLocation && (
        <DropdownMenuItem className="gap-2" onSelect={handleSelect}>
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
            onClick={handleClick}
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
