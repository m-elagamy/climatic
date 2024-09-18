export type WeatherData = {
  location: {
    name: string;
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
  };

  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }[];
  };
};
