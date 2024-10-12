import roundToNearestInteger from "@/utils/roundToNearestInteger";
import type { Location } from "@/types/WeatherFlags";

const isDefaultCity = (
  userDefaultLocation: Location | null,
  city: Partial<Location>,
): boolean => {
  if (!userDefaultLocation) return false;

  return (
    roundToNearestInteger(+userDefaultLocation.lat) ===
    roundToNearestInteger(city.lat as number)
  );
};

export default isDefaultCity;
