import { CommandGroup, CommandItem } from "@/components/ui/command";
import type { Location } from "@/types/WeatherFlags";
import { SUGGESTED_CITIES } from "@/utils/constants";

// Types
type SuggestedCitiesProps = {
  handleCityChange: (city: Partial<Location>) => void;
};

function SuggestedCities({ handleCityChange }: SuggestedCitiesProps) {
  return (
    <CommandGroup heading="Suggestions">
      {SUGGESTED_CITIES.map((city) => (
        <CommandItem
          key={city.name}
          onSelect={() => handleCityChange(city)}
          className="city-option"
        >
          {city.name}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}

export default SuggestedCities;
