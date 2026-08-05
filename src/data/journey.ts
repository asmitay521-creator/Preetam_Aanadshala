import React from "react";
import {
  HeartHandshake,
  Users,
  Building2,
  Target,
  LucideProps,
} from "lucide-react";

export interface TimelineItem {
  id: number;
  side: "left" | "right";
  year: string;
  title: string;
  description: string;
  color: string;
  Icon: React.ComponentType<LucideProps>;
  icon?: string | React.ReactNode;
  date?: string;
}

export const journeyData: TimelineItem[] = [
  {
    id: 1,
    side: "left",
    year: "26 जानेवारी, 2000",
    date: "26 जानेवारी, 2000",
    title: "श्री. अभिनव जगन्नाथ कामाणी यांनी प्रतिष्ठानची स्थापना",
    description:
      "माझ्या जन्मगावी रुजलेली सेवा, विश्वास आणि आनंद यांचा प्रवास याच दिवसापासून सुरू झाला.",
    color: "#EC4899",
    Icon: HeartHandshake,
    icon: "❤️",
  },
  {
    id: 2,
    side: "right",
    year: "15 ऑगस्ट, 2023",
    date: "15 ऑगस्ट, 2023",
    title: "ज्येष्ठ नागरिक आनंद मेळाव्याची यशस्वी सुरुवात",
    description:
      "मानसिक, शारीरिक आणि सामाजिक आरोग्य वृद्धिंगत करण्यासाठी आनंद मेळाव्याची सुरुवात झाली.",
    color: "#2563EB",
    Icon: Users,
    icon: "👥",
  },
  {
    id: 3,
    side: "left",
    year: "01 जानेवारी, 2025",
    date: "01 जानेवारी, 2025",
    title: "प्रतिम आयुर्वेदिक इमारत व नवीन सुविधांचा शुभारंभ",
    description:
      "ज्येष्ठ नागरिकांसाठी आधुनिक सुविधा उपलब्ध करून देण्याचा नवा टप्पा.",
    color: "#F59E0B",
    Icon: Building2,
    icon: "🏢",
  },
  {
    id: 4,
    side: "right",
    year: "2025 पुढे",
    date: "2025 पुढे",
    title: "मुंबई व कोल्हापूर येथे विस्तार",
    description:
      "सेवा विस्तार, समाजासाठी अधिक कार्य आणि नवीन पर्वाची सुरुवात.",
    color: "#22C55E",
    Icon: Target,
    icon: "🎯",
  },
];

export const timelineData = journeyData;
