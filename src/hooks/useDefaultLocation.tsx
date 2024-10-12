import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/useToast";
import delay from "@/utils/delay";

const useDefaultLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [userDefaultLocation, setUserDefaultLocation] = useLocalStorage<{
    name?: string;
    city: string;
    lat: string;
    lon: string;
  } | null>("user-default-location");
  const [isDefaultLocationEnabled, setIsDefaultLocationEnabled] =
    useLocalStorage("is-default-location-enabled", false);

  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const saveLocation = async (shouldShowToast: boolean = true) => {
    if (city && lat && lon) {
      setUserDefaultLocation({ city, lat, lon });
      await delay(500);
      if (shouldShowToast) {
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
    await delay(1000);
    setIsDefaultLocationEnabled(false);
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
    isDefaultLocationEnabled,
    setIsDefaultLocationEnabled,
  };
};

export default useDefaultLocation;
