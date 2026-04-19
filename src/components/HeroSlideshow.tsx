import { useState, useEffect } from "react";

const slides = [
  { src: "/images/flo-1.png", label: "Women in green field" },
  { src: "/images/flo-2.png", label: "Women carrying baskets" },
  { src: "/images/flo-3.png", label: "Group of women seated outdoors" },
  { src: "/images/flo-4.png", label: "Community gathering under banana trees" },
  { src: "/images/flo-5.png", label: "Rural village community" },
  { src: "/images/flo-6.png", label: "Transgender visibility event 2026" },
  { src: "/images/flo-7.png", label: "Transgender visibility event 2026" },
  { src: "/images/flo-community-dialogue.jpg", label: "Community dialogue on LBTGNC disabled people's rights" },
  { src: "/images/flo-youth-sports.jpg", label: "Youth Sports Day" },
  { src: "/images/flo-srhr-community.png", label: "SRHR community outreach" },
  { src: "/images/flo-tanga-group.png", label: "TANGA Community Initiative" },
  { src: "/images/flo-disability-summit.jpg", label: "LGBTQI+ Disability Rights Summit" },
  { src: "/images/flo-disability-group.jpg", label: "Disability rights group" },
  { src: "/images/flo-tanga-training1.png", label: "TANGA Data Collection Training" },
  { src: "/images/flo-covid-workshop3.png", label: "COVID-19 Response Workshop" },
  { src: "/images/flo-human-rights-day1.png", label: "International Human Rights Day 2024" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.label}
          loading={i === 0 ? "eager" : "lazy"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(26,26,46,0.75), rgba(61,26,110,0.6), rgba(139,26,74,0.65))",
        }}
      />
    </div>
  );
}
