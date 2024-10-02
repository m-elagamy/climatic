import { useCallback, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/navigation";
import type { Location } from "@/types/WeatherFlags";

const useCityChange = (setOpen: Dispatch<SetStateAction<boolean>>) => {
  const router = useRouter();

  const handleCityChange = useCallback(
    (selectedCity: Partial<Location>) => {
      setOpen(false);

      try {
        const cityName = selectedCity.name ?? "";

        router.push(
          `/?city=${encodeURIComponent(cityName)}&id=${selectedCity.id}`,
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

  return { handleCityChange };
};

export default useCityChange;
