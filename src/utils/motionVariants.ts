const motionVariants = (
  ease: number[] | string = "easeInOut",
  initY?: number,
  endY?: number,
  initRotate?: number,
  endRotate?: number,
  initScale?: number,
  endScale?: number,
) => {
  return {
    hidden: {
      opacity: 0,
      rotate: initRotate,
      y: initY,
      scale: initScale,
    },
    visible: {
      opacity: 1,
      rotate: endRotate,
      y: endY,
      scale: endScale,
      transition: {
        duration: 0.6,
        ease: ease,
      },
    },
  };
};
export default motionVariants;
