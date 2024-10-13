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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.3,
    },
  },
};

export { motionVariants, listVariants, itemVariants, iconVariants };
