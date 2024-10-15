import BullHorn from "@/components/icons/BullHorn";
import ToolTip from "@/components/ui/tooltip";
import type { WeatherAlert } from "@/types/WeatherFlags";

const AlertBanner = ({ alerts }: { alerts: WeatherAlert }) => {
  const { alert } = alerts;
  return (
    <section className="absolute bottom-4 right-4">
      <h2 className="sr-only">Alerts</h2>
      <ToolTip
        tooltipTrigger={<BullHorn />}
        tooltipContent={
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{alert.at(0)?.headline}.</span>
            <span>{alert.at(0)?.desc}</span>
          </div>
        }
      />
    </section>
  );
};
export default AlertBanner;
