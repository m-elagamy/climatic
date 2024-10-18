import { useRouter } from "next/navigation";
import { Save, Trash2, Loader2, Star } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import buildLocationUrl from "@/utils/buildLocationUrl";

const FavLocationOption = () => {
  const router = useRouter();
  const {
    isLoading,
    saveLocation,
    removeLocation,
    userDefaultLocation,
    city,
    lat,
    lon,
  } = useDefaultLocation();

  const handleSelect = () => {
    router.push(
      buildLocationUrl(
        userDefaultLocation?.city,
        userDefaultLocation?.lat,
        userDefaultLocation?.lon,
      ),
    );
  };

  return (
    <div className="relative">
      {!userDefaultLocation && (
        <DropdownMenuItem
          className="gap-2"
          onSelect={() => saveLocation()}
          disabled={!city || !lat || !lon}
        >
          <Save size={16} /> Save Location
        </DropdownMenuItem>
      )}

      {!!userDefaultLocation && (
        <DropdownMenuItem className="gap-2" onSelect={handleSelect}>
          <Star size={16} className="text-yellow-400" />
          {userDefaultLocation.city}
        </DropdownMenuItem>
      )}

      <div className="absolute right-2 top-[6px]">
        {!userDefaultLocation && (
          <ToolTip
            tooltipTrigger={
              <InfoCircledIcon className="size-[17px] text-sky-500 hover:text-sky-600" />
            }
            tooltipContent={
              <p>
                This option saves the currently selected city so you can easily
                access it later quickly.
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
export default FavLocationOption;
