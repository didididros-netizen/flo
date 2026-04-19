import { Heart, Eye, Target } from "lucide-react";

const cards = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Our Story",
    text: "FLO was founded on 22nd August 2022 as a women-led CBO advocating for women, girls, LGBTIQ+, sex workers, PWDs, people with HIV/AIDS, and children in Bugesera, Rwanda.",
  },
  {
    icon: <Eye className="h-8 w-8 text-secondary" />,
    title: "Our Vision",
    text: "A society where all individuals — regardless of ability, sexual orientation, or health status — enjoy equal rights, opportunities, and protection, in a culture of love, acceptance, and respect.",
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Our Mission",
    text: "To advocate for the rights and dignity of women, girls, sexual minorities, PWDs, and individuals affected by HIV/AIDS through inclusivity, empowerment, education, outreach, and healthcare services.",
  },
];

export default function WhoWeAre() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-12 text-center">
        Who <span className="gradient-text">We Are</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="glass-card p-8 transition-transform hover:-translate-y-1">
            <div className="mb-4">{c.icon}</div>
            <h3 className="mb-3 text-xl font-bold font-[family-name:var(--font-heading)]">{c.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/75">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
