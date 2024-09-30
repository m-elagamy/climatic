const formatTime = (time: string) => {
  return new Date(time).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export default formatTime;
