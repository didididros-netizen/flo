import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/flo-1.png", label: "Women in green field" },
  { src: "/images/flo-2.png", label: "Women carrying baskets" },
  { src: "/images/flo-3.png", label: "Group of women seated outdoors" },
  { src: "/images/flo-4.png", label: "Community gathering under banana trees" },
  { src: "/images/flo-5.png", label: "Rural village community" },
  { src: "/images/flo-6.png", label: "Transgender visibility event 2026 (1)" },
  { src: "/images/flo-7.png", label: "Transgender visibility event 2026 (2)" },
  { src: "/images/flo-community-dialogue.jpg", label: "Community dialogue on LBTGNC disabled people's rights" },
  { src: "/images/flo-youth-sports.jpg", label: "Youth Sports Day: Fighting Drugs & Substance Abuse" },
  { src: "/images/flo-srhr-community.png", label: "SRHR community outreach" },
  { src: "/images/flo-tanga-meeting.png", label: "SRHR research meeting with TANGA" },
  { src: "/images/flo-tanga-group.png", label: "TANGA Community Initiative group photo" },
  { src: "/images/flo-covid-workshop3.png", label: "COVID-19 Response Workshop" },
  { src: "/images/flo-human-rights-day1.png", label: "International Human Rights Day 2024" },
  { src: "/images/flo-human-rights-day4.png", label: "Human Rights Day discussion" },
];

export default function GallerySection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-12 text-center">
        Our <span className="gradient-text">Gallery</span>
      </h2>

      <div className="relative mx-auto mb-6 max-w-3xl overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9]">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.label}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
              }}
            />
          ))}
        </div>
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 glass-card flex h-10 w-10 items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 glass-card flex h-10 w-10 items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 text-xs font-medium">
          {images[active].label}
        </p>
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="shrink-0 overflow-hidden rounded-lg transition-all"
            style={{
              width: 72,
              height: 48,
              border: i === active ? "2px solid #D63BAE" : "2px solid transparent",
              opacity: i === active ? 1 : 0.5,
            }}
          >
            <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
