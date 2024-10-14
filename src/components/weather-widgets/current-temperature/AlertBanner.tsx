import BullHorn from "@/components/icons/BullHorn";
import ToolTip from "@/components/ui/tooltip";
import type { WeatherAlert } from "@/types/WeatherFlags";

const AlertBanner = ({ alerts }: { alerts: WeatherAlert }) => {
  return (
    <section className="absolute bottom-4 right-4">
      <h2 className="sr-only">Alerts</h2>
      <ToolTip
        tooltipTrigger={<BullHorn />}
        tooltipContent={
          <div>
            {alerts.alert?.map((alert) => (
              <div key={alert.event}>
                <p>{alert.headline}</p>
                <p>{alert.desc}</p>
              </div>
            ))}
          </div>
        }
      />
    </section>
  );
};
export default AlertBanner;
