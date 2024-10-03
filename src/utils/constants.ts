import type { Location } from "@/types/WeatherFlags";

const SUGGESTED_CITIES: Partial<Location>[] = [
  {
    name: "London",
    id: 2801268,
    lat: 51.50853,
    lon: -0.12574,
  },
  {
    name: "Sydney",
    id: 136022,
    lat: -33.8688,
    lon: 151.2093,
  },
  {
    name: "Tokyo",
    id: 3125553,
    lat: 35.6895,
    lon: 139.6917,
  },
  {
    name: "Moscow",
    id: 2145091,
    lat: 55.7558,
    lon: 37.6173,
  },
  {
    name: "Berlin",
    id: 568120,
    lat: 52.52,
    lon: 13.405,
  },
];

const HOURS_TO_SHOW = 12;

export { SUGGESTED_CITIES, HOURS_TO_SHOW };
