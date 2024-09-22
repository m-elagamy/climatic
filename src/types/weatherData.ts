export type WeatherData = {
  location: {
    name: string;
    country: string;
    tz_id: string;
  };

  current: {
    temp_c: number;
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
    wind_degree: number;
    wind_dir: string;
    uv: number;
    feelslike_c: number;
    is_day: boolean;
    precip_mm: number;
    humidity: number;
  };

  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        uv: number;
        avghumidity: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        is_moon_up: boolean;
        is_sun_up: boolean;
      };
      hour: {
        time: string;
        temp_c: number;
        is_day: boolean;
      }[];
    }[];
  };
};
