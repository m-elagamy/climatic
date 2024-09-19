import AirPollution from "@/components/AirPollution";
import CurrentTemperature from "@/components/current-temperature/CurrentTemperature";
import Header from "@/components/Header";
import SunRiseSet from "@/components/SunRiseSet";
import WindCompass from "@/components/WindCompass";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-wrap gap-4">
        <CurrentTemperature />
        <AirPollution />
        <SunRiseSet />
        <WindCompass />
      </main>
    </>
  );
}
