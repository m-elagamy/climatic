import { Star } from "lucide-react";
import type { Location } from "@/types/WeatherFlags";
import roundToNearestInteger from "./roundToNearestInteger";

const markDefaultLocation = (
  userDefaultLocation: Partial<Location>,
  city: Partial<Location>,
) => {
  if (!userDefaultLocation) return;

  const roundedDefaultLocationLat = roundToNearestInteger(
    userDefaultLocation.lat,
  );
  const roundedDefaultCityLat = roundToNearestInteger(city.lat);

  if (roundedDefaultLocationLat === roundedDefaultCityLat) {
    return Star;
  }
};

export default markDefaultLocation;
