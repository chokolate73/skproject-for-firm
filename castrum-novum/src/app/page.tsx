import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SegmentsSection from "@/components/SegmentsSection";
import ProcessSection from "@/components/ProcessSection";
import ChallengesSection from "@/components/ChallengesSection";
import ReferencesSection from "@/components/ReferencesSection";
import NewsSection from "@/components/NewsSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <AdvantagesSection />
      <SegmentsSection />
      <ProcessSection />
      <ChallengesSection />
      <ReferencesSection />
      <NewsSection />
      <CtaBanner />
    </>
  );
}
