"use client";

import { AnimatePresence, motion } from "framer-motion";

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={(children as React.ReactElement).key || "root-layout"} // Dynamic key for transitions
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionWrapper;
