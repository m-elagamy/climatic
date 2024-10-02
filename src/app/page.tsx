import AirPollution from "@/components/weather-widgets/air-quality/AirQuality";
import CurrentTemperature from "@/components/weather-widgets/current-temperature/CurrentTemperature";
import FeelsLikeTemp from "@/components/weather-widgets/feels-like-temperature/FeelsLikeTemp";
import Header from "@/components/header/Header";
import Humidity from "@/components/weather-widgets/humidity/Humidity";
import SunRiseSet from "@/components/weather-widgets/sunrise-sunset/SunRiseSet";
import Ultraviolet from "@/components/weather-widgets/uv-index/Ultraviolet";
import Wind from "@/components/weather-widgets/wind/Wind";
import HourlyForecast from "@/components/weather-widgets/hourly-forecast/HourlyForecast";
import Pressure from "@/components/weather-widgets/pressure/Pressure";
import Visibility from "@/components/weather-widgets/visibility/Visibility";
import DaysForecast from "@/components/weather-widgets/days-forecast/DaysForecast";
import Precipitation from "@/components/weather-widgets/precipitation/Precipitation";
import DewPoint from "@/components/weather-widgets/dew-point/DewPoint";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    city: string;
  };
}) {
  const { city } = searchParams;

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 md:flex-row">
        <section className="flex w-full min-w-[18rem] flex-col gap-4 md:w-[144px]">
          <CurrentTemperature city={city} />
          <DaysForecast city={city} />
        </section>
        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <FeelsLikeTemp city={city} />
          <Humidity city={city} />
          <Ultraviolet city={city} />
          <AirPollution city={city} />
          <Wind city={city} />
          <Visibility city={city} />
          <Pressure city={city} />
          <SunRiseSet city={city} />
          <Precipitation city={city} />
          <DewPoint city={city} />
          <HourlyForecast city={city} />
        </section>
      </main>
    </>
  );
}
