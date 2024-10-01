export type HourData = {
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: boolean | undefined;
  condition: {
    text: string;
  };
};

export type DayData = {
  maxtemp_c: number;
  mintemp_c: number;
  maxtemp_f: number;
  mintemp_f: number;
  uv?: number;
  avghumidity?: number;
  condition: {
    text: string;
  };
};

export type Location = {
  name: string;
  country: string;
  tz_id: string;
  localtime: string;
};

export type Current = {
  localtime: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
  };
  air_quality: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
  };
  wind_kph: number;
  wind_mph: number;
  wind_degree: number;
  wind_dir: string;
  uv: number;
  feelslike_c: number;
  feelslike_f: number;
  is_day: boolean;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  pressure_mb: number;
  pressure_in: number;
  vis_km: number;
  vis_miles: number;
  dewpoint_c: number;
  dewpoint_f: number;
};

export type WeatherFlags = {
  location?: Location;

  current: Current;

  forecast: {
    forecastday: {
      date: string;
      day: DayData;
      astro?: {
        sunrise: string;
        sunset: string;
        is_sun_up: boolean;
      };
      hour: HourData[];
    }[];
  };
};
