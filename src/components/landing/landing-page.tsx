
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { LogoCloud } from "./LogoCloud";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { AIFeatures } from "./AIFeatures";
import { Templates } from "./Templates";
import { AtsChecker } from "./AtsChecker";
import { Stats } from "./Stats";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import FAQ from "./FAQ";
import { CTABanner } from "./CTAbanner";
import Footer from "./Footer";
export function LandingPage() {
  return (
    <main >
      <div >
        <Navbar />
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <AIFeatures />
        <Templates />
        <AtsChecker />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
    </main>
  );
}

