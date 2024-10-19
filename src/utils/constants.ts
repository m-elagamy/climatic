import type { Location } from "@/types/WeatherFlags";

const SUGGESTED_CITIES: Partial<Location>[] = [
  {
    name: "London",
    country: "United Kingdom",
    id: 2801268,
    lat: 51.50853,
    lon: -0.12574,
  },
  {
    name: "Sydney",
    country: "Australia",
    id: 136022,
    lat: -33.8688,
    lon: 151.2093,
  },
  {
    name: "Tokyo",
    country: "Japan",
    id: 3125553,
    lat: 35.6895,
    lon: 139.6917,
  },
  {
    name: "Moscow",
    country: "Russia",
    id: 2145091,
    lat: 55.7558,
    lon: 37.6173,
  },
  {
    name: "Kansas City",
    country: "United States",
    id: 4930956,
    lat: 39.0997,
    lon: -94.5786,
  },
];

const TOTAL_HOURS = 12;

const DEFAULT_CITY = "Cairo";

export { SUGGESTED_CITIES, TOTAL_HOURS, DEFAULT_CITY };
