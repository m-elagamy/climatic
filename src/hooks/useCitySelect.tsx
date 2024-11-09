import { useCallback, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/navigation";
import buildLocationUrl from "@/utils/buildLocationUrl";
import type { Location } from "@/types/WeatherFlags";

const useCitySelect = (setOpen: Dispatch<SetStateAction<boolean>>) => {
  const router = useRouter();

  const handleCitySelect = useCallback(
    (selectedCity: Partial<Location>) => {
      setOpen(false);

      try {
        router.push(
          buildLocationUrl(
            selectedCity.name,
            selectedCity.lat,
            selectedCity.lon,
          ),
        );
      } catch (error) {
        console.error(
          `Error navigating to ${encodeURIComponent(selectedCity.name ?? "")}:`,
          error,
        );
      }
    },
    [router, setOpen],
  );

  return { handleCitySelect };
};

export default useCitySelect;
