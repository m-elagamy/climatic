import { motion } from "framer-motion";

const ErrorMessage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p className="text-red-500">Failed to fetch cities, please try again.</p>
    </motion.div>
  );
};
export default ErrorMessage;
