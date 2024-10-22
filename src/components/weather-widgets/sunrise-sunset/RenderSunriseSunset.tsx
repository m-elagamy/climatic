import type { ElementType } from "react";

type RenderSunriseSunsetProps = {
  Icon1: ElementType;
  label1: string;
  time1: string;
  Icon2: ElementType;
  label2: string;
  time2: string;
  isSunUp: boolean | undefined;
};

const RenderSunriseSunset = ({
  Icon1,
  label1,
  time1,
  Icon2,
  label2,
  time2,
  isSunUp,
}: RenderSunriseSunsetProps) => {
  // Swap values based on isSunUp
  const FirstIcon = isSunUp ? Icon2 : Icon1;
  const firstLabel = isSunUp ? label2 : label1;
  const firstTime = isSunUp ? time2 : time1;

  const SecondIcon = isSunUp ? Icon1 : Icon2;
  const secondLabel = isSunUp ? label1 : label2;
  const secondTime = isSunUp ? time1 : time2;

  return (
    <>
      <h2 className="title" aria-label={`${firstLabel}: ${firstTime}`}>
        <FirstIcon
          size={16}
          className={`${isSunUp ? "text-orange-500" : "text-yellow-400"}`}
          fill="currentColor"
        />
        {firstLabel}:
      </h2>
      <p className="text-2xl" aria-label={firstTime}>
        {firstTime.split(" ")[0]}
        <span className="text-xs">{firstTime.split(" ")[1]}</span>
      </p>

      <p
        className="flex flex-wrap items-center gap-1"
        aria-label={`${secondLabel}: ${secondTime}`}
      >
        <span className="flex items-center gap-1 text-muted-foreground">
          <SecondIcon
            size={16}
            className={`${isSunUp ? "text-yellow-500" : "text-orange-500"}`}
            fill="currentColor"
          />
          {secondLabel}:
        </span>
        <span className="text-xl">
          {secondTime.split(" ")[0]}
          <span className="text-xs">{secondTime.split(" ")[1]}</span>
        </span>
      </p>
    </>
  );
};
export default RenderSunriseSunset;
