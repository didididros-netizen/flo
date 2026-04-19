const focusAreas = [
  "Sexual Minority Advocacy",
  "Women & Girls' Rights",
  "HIV/AIDS Support",
  "Child Protection",
  "Palliative Care",
  "Disability Inclusion",
];

const sdgs = [
  { num: 3, title: "Good Health & Well-being", color: "#4C9F38" },
  { num: 5, title: "Gender Equality", color: "#FF3A21" },
  { num: 10, title: "Reduced Inequalities", color: "#DD1367" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-12 text-center">
        About <span className="gradient-text">FLO</span>
      </h2>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="glass-card p-8">
          <h3 className="mb-4 text-xl font-bold font-[family-name:var(--font-heading)]">Our Approach</h3>
          <p className="text-sm leading-relaxed text-foreground/80">
            Free Love Organization takes a holistic, community-driven approach to human rights advocacy. 
            We combine grassroots mobilization, education, health services, and legal support to create 
            lasting change. Our programs are designed with and for the communities we serve — centering 
            the voices of women, sexual minorities, people with disabilities, and those affected by 
            HIV/AIDS. Through partnerships with local and international organizations, we amplify our 
            impact while maintaining deep roots in Bugesera, Rwanda.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-6 text-lg font-bold font-[family-name:var(--font-heading)]">Core Focus Areas</h3>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((a) => (
              <span key={a} className="pill-badge">{a}</span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-center text-lg font-bold font-[family-name:var(--font-heading)]">
          Aligned with the <span className="gradient-text">Sustainable Development Goals</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {sdgs.map((s) => (
            <div key={s.num} className="glass-card flex items-center gap-4 p-6">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-xl font-bold"
                style={{ backgroundColor: s.color }}
              >
                {s.num}
              </div>
              <div>
                <p className="text-xs text-foreground/60">SDG {s.num}</p>
                <p className="text-sm font-semibold">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
