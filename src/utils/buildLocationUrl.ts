import { DEFAULT_CITY } from "./constants";

const buildLocationUrl = (
  city?: string,
  lat?: string | number,
  lon?: string | number,
) => {
  if (city)
    return `/?city=${encodeURIComponent(city)}&lat=${encodeURIComponent(lat as string)}&lon=${encodeURIComponent(lon as string)}`;

  if (lat && lon)
    return `/?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;

  return `/?city=${encodeURIComponent(DEFAULT_CITY)}`;
};

export default buildLocationUrl;
