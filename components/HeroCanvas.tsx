import { GoldArcs } from "@/components/GoldArcs";
import { GreetingSection } from "@/components/GreetingSection";
import { VideoEditingFeature } from "@/components/VideoEditingFeature";

export function HeroCanvas() {
  return <section className="hero-canvas" aria-label="English rootme landing page">
    <div className="hero-atmosphere" aria-hidden="true" />
    <VideoEditingFeature />
    <GreetingSection />
    <GoldArcs />
  </section>;
}
