import { motion } from "framer-motion";
import { CommandEmpty } from "@/components/ui/command";

function NoResultMessage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <CommandEmpty>No matching cities found.</CommandEmpty>
    </motion.div>
  );
}

export default NoResultMessage;
