import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
