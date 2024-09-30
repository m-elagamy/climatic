const getPrecipitationPercentage = (precipitation: number) => {
  const precipitationPercentage = Math.round((precipitation / 25) * 100);
  return precipitationPercentage;
};

export default getPrecipitationPercentage;
