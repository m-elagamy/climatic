import { Thermometer, ThermometerSun } from "lucide-react";

const getThermometerIcon = (isDay: boolean | undefined) => {
  return isDay ? ThermometerSun : Thermometer;
};

export default getThermometerIcon;
