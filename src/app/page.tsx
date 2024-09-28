import AirPollution from "@/components/weather-widgets/air-pollution/AirPollution";
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
import DaysForecast from "@/components/weather-widgets/DaysForecast";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid gap-4 rounded-xl border p-4 shadow-main md:grid-cols-2 lg:grid-cols-4">
        <CurrentTemperature />
        <section className="space-y-4 lg:col-span-3">
          <HourlyForecast />
          <DaysForecast />
        </section>
        <section className="space-y-4">
          <FeelsLikeTemp />
          <Humidity />
        </section>
        <section className="space-y-4">
          <Ultraviolet />
          <AirPollution />
        </section>
        <section className="space-y-4">
          <Visibility />
          <Pressure />
        </section>
        <section className="space-y-4">
          <Wind />
          <SunRiseSet />
        </section>
      </main>
    </>
  );
}
