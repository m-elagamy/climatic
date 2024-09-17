import CurrentWeather from "@/components/CurrentWeather";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CurrentWeather />
      </main>
    </>
  );
}
