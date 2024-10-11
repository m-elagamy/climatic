import { motion } from "framer-motion";

import { CommandItem } from "@/components/ui/command";
import { itemVariants } from "@/utils/motionVariants";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import markDefaultLocation from "@/utils/markDefaultLocation";
import type { Location } from "@/types/WeatherFlags";

type CitySearchResultsProps = {
  handleCityChange: (city: Partial<Location>) => void;
  city: Partial<Location>;
};

const CitySearchResults = ({
  handleCityChange,
  city,
}: CitySearchResultsProps) => {
  const { userDefaultLocation } = useDefaultLocation();

  const defaultLocationWithNumericCoordinates = userDefaultLocation
    ? {
        ...userDefaultLocation,
        lat: userDefaultLocation.lat ? +userDefaultLocation.lat : undefined,
        lon: userDefaultLocation.lon ? +userDefaultLocation.lon : undefined,
      }
    : null;

  const GetMarkedDefaultLocation = defaultLocationWithNumericCoordinates
    ? markDefaultLocation(defaultLocationWithNumericCoordinates, city)
    : null;

  return (
    <motion.li variants={itemVariants}>
      <CommandItem
        onSelect={() => handleCityChange(city)}
        className="city-option cursor-pointer"
      >
        {city.name}, {city.country}{" "}
        {GetMarkedDefaultLocation && (
          <GetMarkedDefaultLocation
            style={{ marginLeft: "4px", width: "16px", height: "16px" }}
          />
        )}
      </CommandItem>
    </motion.li>
  );
};
export default CitySearchResults;
