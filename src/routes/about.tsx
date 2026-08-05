import React from "react";
import AnandshalaStory from "@/components/AnandshalaStory";
import JourneyTimeline from "@/components/journey-v2/JourneyTimeline";
import SmoothScroll from "@/components/SmoothScroll";

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <AnandshalaStory />
      <JourneyTimeline />
    </>
  );
}