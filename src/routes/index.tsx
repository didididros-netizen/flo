import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import CoreValues from "../components/CoreValues";
import AboutSection from "../components/AboutSection";
import ImpactSection from "../components/ImpactSection";
import StoriesSection from "../components/StoriesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Love Organization (FLO)" },
      { name: "description", content: "FLO is a women-led CBO in Bugesera, Rwanda advocating for women, girls, LGBTIQ+, PWDs, and people with HIV/AIDS through inclusivity, empowerment, and justice." },
      { property: "og:title", content: "Free Love Organization — Empowering Lives, Advocating Rights" },
      { property: "og:description", content: "A women-led movement for dignity, inclusion, and justice in Rwanda and beyond." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GallerySection />
      <WhoWeAre />
      <CoreValues />
      <AboutSection />
      <ImpactSection />
      <StoriesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
