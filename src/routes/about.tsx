import { createFileRoute } from "@tanstack/react-router";
import AnandshalaStory from "@/components/AnandshalaStory";
import JourneySection from "@/components/journey/JourneySection";
import SmoothScroll from "@/components/SmoothScroll";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "आमच्याविषयी | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      {
        name: "description",
        content:
          "श्री. अभिनव जननाथ काकाणी यांच्या स्वप्न प्रकल्पातून साकारलेल्या भारतातील पहिल्या ज्येष्ठ नागरिक आनंदशाळेची कहाणी, ध्येय व वाटचाल.",
      },
      { property: "og:title", content: "आमच्याविषयी | प्रीतम ज्येष्ठ नागरिक आनंदशाळा" },
      {
        property: "og:description",
        content: "आनंदशाळेची संकल्पना, संस्थापक व मिळालेले पुरस्कार यांची माहिती.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SmoothScroll />
      <AnandshalaStory />
      <JourneySection />
    </>
  );
}