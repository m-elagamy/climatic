import { motion } from "framer-motion";
import CurrentLocationOption from "./CurrentLocationOption";
import ToggleUnitsOption from "./ToggleUnitsOption";
import DefaultLocationOption from "./DefaultLocationOption";

const settingsOptionsVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SettingsOptions = ({
  hasAnimated,
  setHasAnimated,
}: {
  hasAnimated: boolean | undefined;
  setHasAnimated: (value: boolean) => void;
}) => {
  return (
    <motion.div
      variants={settingsOptionsVariants}
      initial={!hasAnimated ? "hidden" : false}
      animate={!hasAnimated ? "visible" : false}
      onAnimationComplete={() => setHasAnimated(true)}
      className="space-y-1"
    >
      <CurrentLocationOption />
      <DefaultLocationOption />
      <ToggleUnitsOption />
    </motion.div>
  );
};
export default SettingsOptions;
