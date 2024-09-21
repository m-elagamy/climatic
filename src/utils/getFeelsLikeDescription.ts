export default function getFeelsLikeDescription(feelsLikeTemp: number): string {
  const temperatureRanges = [
    { max: 0, message: "It's freezing! Bundle up to stay warm." },
    { max: 10, message: "It's quite chilly outside. Wear a jacket." },
    { max: 20, message: "The weather is cool and comfortable." },
    { max: 30, message: "It feels warm. Light clothing would be best." },
    { max: Infinity, message: "It's hot outside! Stay hydrated and cool." },
  ];

  // Find the first range where the temperature is less than or equal to the max value
  const range = temperatureRanges.find(({ max }) => feelsLikeTemp <= max);

  // Return the message if a range is found, or a fallback message
  return range?.message ?? "Feels like a perfect day.";
}
