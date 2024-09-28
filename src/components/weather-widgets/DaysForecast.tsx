import { CalendarDays } from "lucide-react";

const DaysForecast = () => {
  return (
    <section className="container-style">
      <h2 className="title">
        <CalendarDays size={16} />
        Days Forecast:
      </h2>
    </section>
  );
};
export default DaysForecast;
