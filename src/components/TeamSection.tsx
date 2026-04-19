import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "Darlene UMUHOZA RYUMUGABE",
    initials: "DU",
    photo: "/images/team-darlene.jpg",
    title: "Chairperson",
    desc: "Strategic leader and governance head of FLO",
    email: "umuhozodarlene51@gmail.com",
  },
  {
    name: "Jr. Emt. Dieudonne MBARUSHIMANA",
    initials: "DM",
    photo: "/images/team-dieudonne.jpg",
    title: "Executive Director",
    desc: "Leads daily operations, programs, and resource mobilization",
    email: "mbarudidi91@gmail.com",
    phone: "(+250) 787 709 159",
  },
  {
    name: "Eric RUKUNDO",
    initials: "ER",
    photo: "/images/team-eric.jpg",
    title: "Deputy Director of Gender Inclusion and Diversity",
    desc: "Champions gender equity, diversity programs, and policy advocacy",
    email: "rukundoeric014@gmail.com",
  },
  {
    name: "Mrs. Kenny Deborah UWITUZE",
    initials: "KU",
    photo: "/images/team-deborah.jpg",
    title: "Director of Administration and Finance",
    desc: "Oversees financial health, budgets, and administrative operations",
    email: "ukennydeborah@gmail.com",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-3 text-center">
        Meet Our <span className="gradient-text">Team</span>
      </h2>
      <p className="mb-12 text-center text-sm italic text-foreground/50">
        We are a women-led team of passionate community advocates.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {team.map((m) => (
          <div key={m.name} className="glass-card p-6">
            <div className="mb-4 flex items-center gap-4">
              {m.photo ? (
                <img src={m.photo} alt={m.name} className="h-14 w-14 shrink-0 rounded-full object-cover" />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold" style={{ background: "linear-gradient(135deg, #D63BAE, #7B2FBE)" }}>
                  {m.initials}
                </div>
              )}
              <div>
                <h3 className="text-base font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-primary">{m.title}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70">{m.desc}</p>
            {m.email && (
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  {m.email}
                </span>
                {m.phone && (
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    {m.phone}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
