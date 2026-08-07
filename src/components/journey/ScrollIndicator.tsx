import { memo } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

function ScrollIndicator() {
  const { scaleY } = useScrollProgress();

  return (
    <motion.div
      style={{ scaleY }}
      className="fixed right-5 top-0 h-full w-1 origin-top bg-gradient-to-b from-pink-400 to-blue-500 z-50 pointer-events-none rounded-full"
    />
  );
}

export default memo(ScrollIndicator);
