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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 md:flex-row">
        <section className="flex w-full min-w-[18rem] flex-col gap-4 md:w-[144px]">
          <CurrentTemperature />
          <DaysForecast />
        </section>

        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <HourlyForecast />
          <FeelsLikeTemp />
          <Humidity />
          <Ultraviolet />
          <AirPollution />
          <Wind />
          <Visibility />
          <Pressure />
          <SunRiseSet />
        </section>
      </main>
    </>
  );
}
