import { itemVariants } from "@/utils/motionVariants";
import { History, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import isDefaultCity from "./isDefaultCity";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import type { Location } from "@/types/WeatherFlags";

// Types
type SearchHistoryProps = {
  searchHistoryResults: Partial<Location>[] | undefined;
  handleCitySelect: (city: Partial<Location>) => void;
  handleRemoveCity: (e: React.MouseEvent, city: Partial<Location>) => void;
};

const SearchHistory = ({
  handleCitySelect,
  handleRemoveCity,
  searchHistoryResults,
}: SearchHistoryProps) => {
  const { userDefaultLocation } = useDefaultLocation();

  return (
    <CommandGroup
      heading={
        <>
          <History className="mr-1 inline-block" size={16} />
          History
        </>
      }
    >
      <AnimatePresence>
        {searchHistoryResults?.map((city) => {
          const isDefault =
            userDefaultLocation && isDefaultCity(userDefaultLocation, city);
          return (
            <motion.li
              key={`${city.name}-${city.country}`}
              variants={itemVariants}
              layout
            >
              <CommandItem
                onSelect={() => handleCitySelect(city)}
                className="city-option"
              >
                <div className="flex items-center gap-1">
                  <span>{city.name},</span>
                  <span>{city.country}</span>
                </div>
                {isDefault && (
                  <Star
                    className="text-yellow-400"
                    style={{ marginLeft: "4px", width: "16px", height: "16px" }}
                  />
                )}
                <X
                  style={{ marginLeft: "auto", width: "16px", height: "16px" }}
                  className="text-muted-foreground transition hover:text-red-500"
                  onClick={(e) => handleRemoveCity(e, city)}
                />
              </CommandItem>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </CommandGroup>
  );
};
export default SearchHistory;
