const stories = [
  {
    images: ["/images/flo-disability-summit.jpg", "/images/flo-disability-group.jpg"],
    title: "Standing for the Rights of LGBTQI+ People with Disabilities",
    description:
      "At FLO, we stand fit to rise the awareness and rights of LGBTQI+ people with disabilities. Through advocacy, community engagement, and inclusive programming, we ensure that persons with disabilities within the LGBTQI+ community are seen, heard, and supported. Disability is not inability — and every person deserves dignity, access, and equal rights.",
  },
  {
    images: ["/images/flo-youth-sports.jpg"],
    title: "Youth Sports Day: Fighting Drugs & Substance Abuse",
    description:
      "At FLO, Youth Sports Day brought our community together to fight drugs and substance abuse through teamwork, discipline, and positive energy. ⚽ By empowering young people with sports, we promote healthy choices, strong minds, and a future free from drugs. Play fair. Live clean. Choose life.",
  },
  {
    images: ["/images/flo-srhr-community.png"],
    title: "Advancing Sexual & Reproductive Health Rights (2025)",
    description:
      "As we close 2025, FLO proudly celebrates a new level of progress in Sexual and Reproductive Health and Rights. Together with our community, donors, allies, and partners, we have expanded access to accurate information and safe abortion services through trusted, friendly health facilities. This impact reflects collective courage, trust, and commitment to dignity, choice, and care for all. Thank you for standing with us and making community-led change possible. — Global Fund for Women (GFW)",
  },
  {
    images: [
      "/images/flo-tanga-meeting.png",
      "/images/flo-tanga-group.png",
      "/images/flo-tanga-discussion1.png",
      "/images/flo-tanga-discussion2.png",
      "/images/flo-tanga-participants.png",
    ],
    title: "SRHR Research with Spectra & TANGA Community Initiative",
    description:
      "At Free Love Organization (FLO), we proudly participated in the Sexual Reproductive Health and Rights (SRHR) research led by Spectra through the TANGA Community Initiative. As a women-led, community-based organization, FLO is committed to advocating for the rights and dignity of women, girls, and marginalized groups, including LGBTIQ+ individuals, persons with disabilities, youth, and people affected by HIV/AIDS. Our involvement in this research reflects our mission to ensure that community voices shape the policies and services that affect us. SRHR is not just a health issue — it's a matter of equity, inclusion, and human rights. We thank Spectra and TANGA for including our perspective and recognizing the power of community input. Together, we move closer to a future where everyone has equal access to care, safety, and respect.",
  },
  {
    images: ["/images/flo-tanga-training1.png", "/images/flo-tanga-training2.png"],
    title: "FLO Participates in Community Data Collection Training Hosted by TANGA Community",
    description:
      "Free Love Organization (FLO) recently attended a Community Data Collection Training organized by the Tanga Community. The training, led by a pool of experts headed by Izere Mugeni Vedastine, focused on strengthening data collection methodologies to enhance community-based advocacy and service delivery. This training provided valuable insights into data-driven decision-making, effective community engagement, and evidence-based advocacy — all of which are crucial in FLO's mission to promote the rights and well-being of marginalized groups, including women, sexual minorities, PWDs, and individuals affected by HIV/AIDS. By participating in such capacity-building initiatives, FLO continues to refine its approach in gathering accurate community data by ensuring that our programs are responsive, impactful, and aligned with the needs of the people we serve.",
  },
  {
    images: [
      "/images/flo-covid-workshop1.png",
      "/images/flo-covid-workshop2.png",
      "/images/flo-covid-workshop3.png",
      "/images/flo-covid-workshop4.png",
    ],
    title: "COVID-19 Response Workshop for Sexual Minorities & Key Populations",
    description:
      "The Free Love Organization (FLO), in collaboration with ANSP+, participated in a COVID-19 response workshop at Five to Five Hotel. The workshop targeted sexual minorities and key populations, focusing on raising awareness, promoting preventive measures and addressing pandemic-related challenges for these groups. Partners: Ministry of Gender and Family Promotion (MIGEPROF), Rainbow Health Foundation, RWAMREC – Rwanda Men's Resource Centre, Rights for All (RIFA), International Human Rights Organization, AfriYAN RDC, UNV East and Southern Africa.",
  },
  {
    images: [
      "/images/flo-human-rights-day1.png",
      "/images/flo-human-rights-day2.png",
      "/images/flo-human-rights-day3.png",
      "/images/flo-human-rights-day4.png",
      "/images/flo-human-rights-day5.png",
    ],
    title: "Celebrating International Human Rights Day 2024",
    description:
      "Today, we proudly celebrate International Human Rights Day, reaffirming our commitment to equality, dignity and justice for all. Together, we strive to empower and uplift every voice in our communities! FLO Again... Rise & Shine to make a better world for humanity. Partners: AfriYAN RDC, My Right Alliance Organization, Rights for All (RIFA), International Human Rights Organization, RWAMREC – Rwanda Men's Resource Centre, Amahoro Human Respect Organization, Global Fund for Women, Health Development Initiative-Rwanda (HDI).",
  },
  {
    images: [
      "/images/flo-group-discussion1.png",
      "/images/flo-group-discussion2.png",
      "/images/flo-group-discussion3.png",
    ],
    title: "Group Discussion on Reproductive Health & Generational Factors (2024)",
    description:
      "Today, FLO held a group discussion about investigating lifelong and generational factors that affect menarche timing, fertility, pregnancy outcomes, gynaecological disorders, and age at menopause. This important conversation brought together community members and partners to explore how these factors impact women's health across generations. Partners: Amahoro Human Respect Organization, Health Development Initiative-Rwanda (HDI), My Right Alliance, PlanetRomeo Berlin.",
  },
  {
    images: ["/images/flo-ecd-day.png"],
    title: "Happy ECD Day — Investing in Our Young Community",
    description:
      "Happy ECD Day to our young community! We thrive to promote educational fertility and a brighter future for African children. On the collaboration of One World Children, we aim to promote young YES-FLO African children — empowering them with early childhood development, education, and care. Partners: City of Kigali, My Right Alliance Organization, Amahoro Human Respect Organization, Health Development Initiative-Rwanda (HDI), Save the Children Penarth.",
  },
];

export default function StoriesSection() {
  return (
    <section id="stories" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-4 text-center">
        News & <span className="gradient-text">Stories</span>
      </h2>
      <p className="mb-12 text-center text-foreground/60">
        Updates from the field — our work in action
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story) => (
          <article key={story.title} className="glass-card overflow-hidden p-0 flex flex-col">
            {story.images.length === 1 ? (
              <img
                src={story.images[0]}
                alt={story.title}
                loading="lazy"
                decoding="async"
                className="w-full h-56 md:h-64 object-cover"
              />
            ) : (
              <div className="grid grid-cols-2 gap-1">
                {story.images.slice(0, 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${story.title} — photo ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-32 md:h-40 object-cover ${
                      story.images.length === 3 && i === 0 ? "col-span-2 h-40 md:h-48" : ""
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="p-5 md:p-6 flex-1 flex flex-col">
              <h3 className="mb-2 text-base font-bold gradient-text leading-tight">
                {story.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80 line-clamp-5">
                {story.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* View More button */}
      <div className="mt-12 text-center">
        <a
          href="https://www.facebook.com/profile.php?id=100083018477965"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          View More on Facebook
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </section>
  );
}
