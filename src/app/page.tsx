import AirPollution from "@/components/weather-widgets/air-pollution/AirPollution";
import CurrentTemperature from "@/components/weather-widgets/current-temperature/CurrentTemperature";
import FeelsLikeTemp from "@/components/weather-widgets/feels-like-temperature/FeelsLikeTemp";
import Header from "@/components/header/Header";
import Humidity from "@/components/weather-widgets/humidity/Humidity";
import SunRiseSet from "@/components/weather-widgets/SunRiseSet";
import Ultraviolet from "@/components/weather-widgets/uv-index/Ultraviolet";
import Wind from "@/components/weather-widgets/wind/Wind";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CurrentTemperature />
        <section className="flex flex-col gap-4">
          <FeelsLikeTemp />
          <Humidity />
        </section>
        <section className="flex flex-col gap-4">
          <Wind />
          <SunRiseSet />
        </section>
        <section className="flex flex-col gap-4">
          <AirPollution />
          <Ultraviolet />
        </section>
      </main>
    </>
  );
}
