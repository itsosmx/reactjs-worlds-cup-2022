import { motion } from "framer-motion";
import React from "react";

export default function RouteContainer({ children }) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
