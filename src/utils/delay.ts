const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export default delay;
