const values = [
  { emoji: "❤️", title: "Love & Dignity", desc: "Every person deserves to be treated with love and inherent dignity." },
  { emoji: "🤝", title: "Inclusion", desc: "Creating spaces where everyone belongs, regardless of identity." },
  { emoji: "🛡️", title: "Protection", desc: "Safeguarding the rights and well-being of the most vulnerable." },
  { emoji: "💪", title: "Empowerment", desc: "Building capacity for communities to lead their own change." },
  { emoji: "🌍", title: "Equity", desc: "Ensuring fair access to opportunities, resources, and justice for all." },
];

export default function CoreValues() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
      <h2 className="section-title mb-12 text-center">
        Core <span className="gradient-text">Values</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
        {values.map((v) => (
          <div key={v.title} className="glass-card flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1">
            <span className="mb-3 text-3xl">{v.emoji}</span>
            <h3 className="mb-2 text-sm font-bold">{v.title}</h3>
            <p className="text-xs leading-relaxed text-foreground/70">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
