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
