import { HeroSection } from "@/components/home/HeroSection";
import { CareerDiscoverySection } from "@/components/home/CareerDiscoverySection";
import { LearningRoadmapSection } from "@/components/home/LearningRoadmapSection";
import { CoursesPreviewSection } from "@/components/home/CoursesPreviewSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InstructorsSection } from "@/components/home/InstructorsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FadeIn } from "@/components/common/FadeIn";
// import { FooterSection } from '@/components/home/FooterSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FadeIn direction="up" delay={100}>
        <CareerDiscoverySection />
      </FadeIn>
      <FadeIn delay={300}>
        <LearningRoadmapSection />
      </FadeIn>
      <FadeIn delay={300}>
        <CoursesPreviewSection />
      </FadeIn>
      <FadeIn delay={300}>
        <FeaturesSection />
      </FadeIn>
      <FadeIn delay={300}>
        <TestimonialsSection />
      </FadeIn>
      <FadeIn delay={300}>
        <StatsSection />
      </FadeIn>
      <FadeIn delay={300}>
        <InstructorsSection />
      </FadeIn>
      <FadeIn delay={300}>
        <PricingSection />
      </FadeIn>
      <FadeIn delay={300}>
        <FAQSection />
      </FadeIn>
      <FadeIn delay={300}>
        <CTASection />
      </FadeIn>
      {/* <FooterSection /> */}
    </>
  );
}
