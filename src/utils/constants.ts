import type { Location } from "@/types/WeatherFlags";

const SUGGESTED_CITIES: Partial<Location>[] = [
  {
    name: "London",
    id: 2801268,
  },
  {
    name: "Sydney",
    id: 136022,
  },
  {
    name: "Tokyo",
    id: 3125553,
  },
  {
    name: "Moscow",
    id: 2145091,
  },
  {
    name: "Berlin",
    id: 568120,
  },
];

const HOURS_TO_SHOW = 12;

export { SUGGESTED_CITIES, HOURS_TO_SHOW };
