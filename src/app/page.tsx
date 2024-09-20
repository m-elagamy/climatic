import AirPollution from "@/components/AirPollution";
import CurrentTemperature from "@/components/current-temperature/CurrentTemperature";
import Header from "@/components/Header";
import SunRiseSet from "@/components/SunRiseSet";
import Ultraviolet from "@/components/Ultraviolet";
import WindCompass from "@/components/WindCompass";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CurrentTemperature />
        <div className="flex flex-col gap-4">
          <AirPollution />
          <Ultraviolet />
        </div>
        <div className="flex w-fit flex-col gap-4">
          <WindCompass />
          <SunRiseSet />
        </div>
      </main>
    </>
  );
}
