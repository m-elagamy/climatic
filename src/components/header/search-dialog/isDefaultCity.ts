import roundToNearestInteger from "@/utils/roundToNearestInteger";
import type { Location } from "@/types/WeatherFlags";

const isDefaultCity = (
  userDefaultLocation: Partial<Location>,
  city: Partial<Location>,
): boolean => {
  return userDefaultLocation.lat
    ? roundToNearestInteger(+userDefaultLocation.lat) ===
        roundToNearestInteger(city.lat as number)
    : false;
};

export default isDefaultCity;
