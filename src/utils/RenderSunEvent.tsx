import type { ElementType } from "react";

const RenderSunEvent = (Icon: ElementType, time: string, label: string) => {
  return (
    <>
      <h2 className="title">
        <Icon size={16} />
        {label}
      </h2>

      <p className="flex-grow">{time}</p>

      <p className="flex gap-1 text-sm">
        <span className="flex gap-1 font-semibold text-muted-foreground">
          <Icon size={16} /> {label}
        </span>
        {time}
      </p>
    </>
  );
};
export default RenderSunEvent;
