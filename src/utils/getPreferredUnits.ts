import roundToNearestInteger from "./roundToNearestInteger";

const getPreferredUnits = (
  isImperial: boolean,
  metricValue: number | undefined,
  imperialValue: number | undefined,
) => {
  const value = isImperial ? imperialValue : metricValue;
  const roundedValue = roundToNearestInteger(value);

  return roundedValue;
};

export default getPreferredUnits;
