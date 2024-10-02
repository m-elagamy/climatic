import { motion } from "framer-motion";

function LoadingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      Loading...
    </motion.div>
  );
}

export default LoadingIndicator;
