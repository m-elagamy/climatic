export default function getAirQualityDescription(
  airQualityIndex: number,
): string {
  // Define the ranges and their corresponding descriptions
  const airQualityDescriptions = {
    0: "The air quality is excellent, enjoy your day outside!",
    20: "The air is good, perfect for outdoor activities.",
    40: "Air quality is moderate, sensitive groups should be cautious.",
    60: "The air quality is poor, consider limiting your outdoor time.",
    80: "Very poor air quality, it's best to stay indoors today.",
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

  // Return the description corresponding to the found key
  return airQualityDescriptions[key as keyof typeof airQualityDescriptions];
}
