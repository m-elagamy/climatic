export default function getAirQualityDescription(
  airQualityIndex: number,
): string {
  // Define the ranges and their corresponding descriptions
  const airQualityDescriptions = {
    0: "Excellent",
    20: "Good",
    40: "Moderate",
    60: "Poor",
    80: "Very Poor",
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
