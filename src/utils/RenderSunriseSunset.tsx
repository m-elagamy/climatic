import type { ElementType } from "react";

const RenderSunriseSunset = (
  Icon: ElementType,
  label: string,
  time: string,
  SecondaryIcon: ElementType,
  secondaryLabel: string,
  secondaryTime: string,
) => {
  return (
    <>
      <h2 className="title">
        <Icon size={16} />
        {label}
      </h2>

      <p className="flex-grow text-lg">{time}</p>

      <p className="flex gap-1 text-sm">
        <span className="flex gap-1 font-semibold text-muted-foreground">
          <SecondaryIcon size={16} /> {secondaryLabel}
        </span>
        {secondaryTime}
      </p>
    </>
  );
};
export default RenderSunriseSunset;
