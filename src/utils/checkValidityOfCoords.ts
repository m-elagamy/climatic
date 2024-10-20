const areCoordsFresh = (timestamp: number) => {
  const now = Date.now();
  const THRESHOLD = 15 * 60 * 1000;
  return now - timestamp < THRESHOLD;
};

export default areCoordsFresh;
