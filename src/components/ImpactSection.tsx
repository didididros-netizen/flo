import { Users, MapPin, Heart, Globe } from "lucide-react";

const metrics = [
  { icon: <Users className="h-7 w-7 text-primary" />, value: "Hundreds", label: "Beneficiaries reached" },
  { icon: <MapPin className="h-7 w-7 text-secondary" />, value: "Rural & Peri-urban", label: "Communities served" },
  { icon: <Heart className="h-7 w-7 text-accent" />, value: "Women & LBTGNC", label: "Individuals supported" },
  { icon: <Globe className="h-7 w-7 text-primary" />, value: "5+", label: "Partner countries" },
];

const partners = ["LEGAL (Liberia)", "SEQHER (Nigeria)", "NMIP (Ghana)", "SHE Thing (Belize)", "BCM (Rwanda)", "RIFA (Rwanda)"];

export default function ImpactSection() {
  return (
    <section id="impact" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-4 text-center">
        Our <span className="gradient-text">Impact</span>
      </h2>
      <p className="mb-12 text-center text-foreground/60">2022 – Present</p>

      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1">
            {m.icon}
            <p className="mt-3 text-xl font-bold">{m.value}</p>
            <p className="mt-1 text-xs text-foreground/60">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Community dialogue image */}
      <div className="mb-12 mx-auto max-w-3xl overflow-hidden rounded-2xl">
        <img
          src="/images/flo-community-dialogue.jpg"
          alt="Community dialogue on the rights of LBTGNC disabled people"
          loading="lazy"
          className="w-full max-h-[400px] object-cover object-top rounded-2xl"
        />
        <p className="mt-3 text-center text-sm text-foreground/60 italic">
          Community dialogue with diverse community discussing the rights of LBTGNC disabled people
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="glass-card p-8">
          <h3 className="mb-3 text-lg font-bold gradient-text">Community Impact</h3>
          <p className="text-sm leading-relaxed text-foreground/80">
            FLO has provided direct support to hundreds of women, girls, and LBTGNC individuals in 
            Bugesera through health screenings, legal aid, psychosocial support, and economic empowerment 
            programs. Our community outreach has raised awareness about HIV prevention, gender-based 
            violence, and the rights of sexual minorities and people with disabilities.
          </p>
        </div>
        <div className="glass-card p-8">
          <h3 className="mb-3 text-lg font-bold gradient-text">Global Fund for Women Grant (2025)</h3>
          <p className="text-sm leading-relaxed text-foreground/80">
            In 2025, FLO was awarded a grant from the Global Fund for Women, recognizing our 
            impactful work in advancing gender justice and LGBTIQ+ rights in East Africa. This 
            funding supports expanded programming in advocacy, community mobilization, and 
            leadership development for marginalized women and gender-diverse communities.
          </p>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-foreground/50">Our Partners</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <span key={p} className="pill-badge text-xs">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
