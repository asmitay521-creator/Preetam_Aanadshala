import { memo } from "react";
import { motion } from "framer-motion";
import JourneyPath from "./JourneyPath";
import TimelineItem from "./TimelineItem";
import { journeyData as timelineData } from "@/data/journey";

function JourneyTimeline() {
  return (
    <section className="relative mt-44">
      {/* SVG Timeline */}
      <JourneyPath />

      {/* Timeline Container */}
      <div className="relative z-30 mx-auto max-w-[1700px]">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
            }}
          >
            <TimelineItem item={item} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="mt-40" />
    </section>
  );
}

export default memo(JourneyTimeline);
