import fetchWeatherData from "@/utils/fetchWeatherData";
import Image from "next/image";
import { CircleGauge, Wind } from "lucide-react";
import type { WeatherData } from "@/types/weatherData";
import ErrorMessage from "./ui/error-message";
import convertWindDirection from "@/utils/convertWindDirection";
import ToolTip from "./ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const WindCompass = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current } = weatherData ?? {};

  const { wind_kph: windSpeed, wind_degree, wind_dir } = current ?? {};

  const convertedWindDirection = convertWindDirection(wind_dir);

  return (
    <article className="container-style">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <Wind size={16} /> Wind
        </h2>
        <ToolTip
          tooltipTrigger={<InfoCircledIcon />}
          tooltipContent={
            <>
              <CircleGauge
                size={16}
                className="mr-1 inline-block text-[#3498db]"
              />
              Wind speed: {windSpeed} kph blowing from {convertedWindDirection}
            </>
          }
        />
      </div>

      {!current && <ErrorMessage error="Wind" />}

      {current && (
        <div className="relative">
          <Image
            src="./../../images/compass_body.svg"
            alt="Wind compass body"
            width={100}
            height={99}
            priority
            className="mx-auto"
          />
          <Image
            src="./../../images/compass_arrow.svg"
            alt="Wind compass arrow"
            width={10.2}
            height={135}
            priority
            className={`absolute left-1/2 top-1/2 transition-transform duration-500 ease-in-out will-change-transform dark:invert`}
            style={{
              transform: `translateX(-50%) translateY(-50%) rotate(${wind_degree}deg)`,
            }}
          />
          <h3 className="absolute left-[51%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-xs font-semibold">
            {windSpeed} kp/h
          </h3>
        </div>
      )}
    </article>
  );
};
export default WindCompass;
