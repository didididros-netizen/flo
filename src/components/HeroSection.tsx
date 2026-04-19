import HeroSlideshow from "./HeroSlideshow";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <HeroSlideshow />
      <div style={{ position: "relative", zIndex: 10 }} className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="section-title mb-6 text-4xl md:text-6xl">
          Empowering Lives,{" "}
          <span className="gradient-text">Advocating Rights</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-foreground/80 md:text-xl">
          A women-led movement for dignity, inclusion, and justice in Rwanda and beyond.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#about" className="btn-glass">Learn About Us</a>
          <a href="#contact" className="btn-gradient">Join Our Mission</a>
        </div>
      </div>
    </section>
  );
}
