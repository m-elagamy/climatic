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
import DewPoint from "@/components/weather-widgets/dew-point/DewPoint";
import LocationDetector from "@/components/LocationDetector";
import Preloader from "@/components/ui/loading-indicators/Preloader";
import WeatherTheme from "@/components/WeatherTheme";

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: {
    city: string;
    lat: string;
    lon: string;
  };
}>) {
  const city = searchParams.city;
  const lat = searchParams.lat;
  const lon = searchParams.lon;

  const shouldDetectLocation = !city && !lat && !lon;

  return (
    <>
      <div
        className={`${!lat && !lon && !city ? "pointer-events-none opacity-50" : ""} relative z-[1]`}
      >
        <Header />
      </div>
      {shouldDetectLocation && <LocationDetector />}
      {lat || lon || city ? (
        <main className="flex flex-col gap-2 md:flex-row md:gap-4">
          <WeatherTheme city={city} lat={lat} lon={lon} />
          <section className="flex w-full min-w-[18rem] flex-col gap-2 md:w-[144px] md:gap-4">
            <CurrentTemperature city={city} lat={lat} lon={lon} />
            <DaysForecast city={city} lat={lat} lon={lon} />
          </section>
          <section className="grid h-full grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <FeelsLikeTemp city={city} lat={lat} lon={lon} />
            <Humidity city={city} lat={lat} lon={lon} />
            <Wind city={city} lat={lat} lon={lon} />
            <Visibility city={city} lat={lat} lon={lon} />
            <Ultraviolet city={city} lat={lat} lon={lon} />
            <AirPollution city={city} lat={lat} lon={lon} />
            <Pressure city={city} lat={lat} lon={lon} />
            <DewPoint city={city} lat={lat} lon={lon} />
            <SunRiseSet city={city} lat={lat} lon={lon} />
            <HourlyForecast city={city} lat={lat} lon={lon} />
          </section>
        </main>
      ) : (
        <Preloader city={city} lat={lat} lon={lon} />
      )}
    </>
  );
}
