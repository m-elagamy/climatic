export default function getAirQualityDescription(
  airQualityIndex: number,
): string {
  // Define the ranges and their corresponding descriptions
  const airQualityDescriptions = {
    0: "The air is fresh and clean today! Enjoy your outdoor activities.",
    20: "Air quality is acceptable, but if you're sensitive to pollution, consider limiting prolonged outdoor exertion.",
    40: "Air quality is a bit concerning for those with respiratory issues. It's best to stay indoors if you're sensitive.",
    60: "Today's air quality is poor. Everyone, especially those with health conditions, should avoid outdoor activities.",
    80: "Air quality is very unhealthy. Limit outdoor exposure as much as possible for your safety.",
    100: "The air quality is extremely dangerous today. Stay indoors and keep your windows closed.",
  };

  // Ensure airQualityIndex is within the valid range
  if (airQualityIndex < 0) {
    return "Invalid Index"; // Return this if index is out of range
  }

  // Get the keys (ranges) from the descriptions object and convert them to numbers
  const keys = Object.keys(airQualityDescriptions).map(Number);

  // Find the appropriate range key that matches the airQualityIndex
  // It returns the first key where airQualityIndex is less than or equal to the key
  const key = keys.find((k) => airQualityIndex <= k);

  // If no valid key is found (i.e., airQualityIndex is above the highest key),
  // return the description for the highest key
  if (key === undefined) {
    return airQualityDescriptions[
      keys[keys.length - 1] as keyof typeof airQualityDescriptions
    ];
  }

  // Return the description corresponding to the found key or the default description
  return (
    airQualityDescriptions[key as keyof typeof airQualityDescriptions] ||
    "Air quality data is not available at the moment. Stay safe and check again later."
  );
}
