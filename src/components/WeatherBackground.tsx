import Image from "next/image";
import getWeatherImage from "@/utils/getWeatherImage";

const WeatherBackground = ({
  condition,
  isDay,
}: {
  condition: string;
  isDay: boolean;
}) => {
  const weatherImage = getWeatherImage(condition, isDay);

  return (
    <section className="fixed inset-0 -z-[1] transition-all duration-300 before:absolute before:inset-0 before:z-[1] before:bg-black/25">
      <h2 className="sr-only">Weather Background</h2>
      <Image
        src={weatherImage}
        alt="Weather Background"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};
export default WeatherBackground;
