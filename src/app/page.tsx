import AirPollution from "@/components/weather-widgets/air-pollution/AirPollution";
import CurrentTemperature from "@/components/weather-widgets/current-temperature/CurrentTemperature";
import FeelsLikeTemp from "@/components/weather-widgets/feels-like-temperature/FeelsLikeTemp";
import Header from "@/components/header/Header";
import Humidity from "@/components/weather-widgets/humidity/Humidity";
import SunRiseSet from "@/components/weather-widgets/sunrise-sunset/SunRiseSet";
import Ultraviolet from "@/components/weather-widgets/uv-index/Ultraviolet";
import Wind from "@/components/weather-widgets/wind/Wind";
import HourlyForecast from "@/components/weather-widgets/hourly-forecast/HourlyForecast";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CurrentTemperature />
        <section className="flex flex-col gap-4">
          <FeelsLikeTemp />
          <SunRiseSet />
        </section>
        <section className="flex flex-col gap-4">
          <Humidity />
          <Ultraviolet />
        </section>
        <section className="flex flex-col gap-4">
          <Wind />
          <AirPollution />
        </section>
        <section className="container-style">
          <h2 className="title">Presuure</h2>
        </section>
        <HourlyForecast />
      </main>
    </>
  );
}
