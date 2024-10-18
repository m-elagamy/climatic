import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/useToast";
import delay from "@/utils/delay";
import type { Location } from "@/types/WeatherFlags";

const useDefaultLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [userDefaultLocation, setUserDefaultLocation] =
    useLocalStorage<Partial<Location> | null>("user-default-location");

  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const saveLocation = async (shouldShowToast: boolean = true) => {
    if (city && lat && lon) {
      setUserDefaultLocation({ city, lat, lon });
      if (shouldShowToast) {
        await delay(500);
        toast({
          title: "Location saved",
          description: (
            <p>
              You have saved <strong>{city}</strong> as your default location.
            </p>
          ),
          duration: 2500,
        });
      }
    }
  };

  const removeLocation = async () => {
    setIsLoading(true);
    await delay(500);
    setUserDefaultLocation(null);
    setIsLoading(false);
    toast({
      title: "Location removed",
      description: "Your default location has been removed.",
      duration: 2500,
      action: (
        <ToastAction altText="Undo" onClick={() => saveLocation(false)}>
          Undo
        </ToastAction>
      ),
    });
  };

  return {
    userDefaultLocation,
    isLoading,
    saveLocation,
    removeLocation,
    city,
    lat,
    lon,
  };
};

export default useDefaultLocation;
