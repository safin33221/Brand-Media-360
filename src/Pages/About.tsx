import MissionAndVision from "@/components/Modules/About/MissionAndVision";
import OurHistory from "@/components/Modules/About/OurHistory";
import WhyWeDifferent from "@/components/Modules/About/WhyWeDifferent";

export default function About() {
  return (
    <div className="space-y-20">
      <OurHistory />
      <MissionAndVision />
      <WhyWeDifferent />
    </div>
  );
};
