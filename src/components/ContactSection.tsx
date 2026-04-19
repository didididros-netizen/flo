import { useState } from "react";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.open(
      `mailto:Freeloveorganization@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self"
    );
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title mb-12 text-center">
        Get in <span className="gradient-text">Touch</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-4 p-6 sm:p-8">
          <input
            type="text"
            placeholder="Your Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-xl bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none border border-[rgba(255,255,255,0.15)] focus:border-primary transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-xl bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none border border-[rgba(255,255,255,0.15)] focus:border-primary transition"
          />
          <textarea
            placeholder="Your Message"
            required
            maxLength={1000}
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-xl bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none border border-[rgba(255,255,255,0.15)] focus:border-primary transition resize-none"
          />
          <button type="submit" className="btn-gradient mt-2">Send Message</button>
        </form>

        <div className="glass-card flex flex-col justify-center gap-5 p-6 sm:p-8">
          <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">Contact Details</h3>
          <p className="flex items-start gap-3 text-sm text-foreground/80">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            Freeloveorganization@gmail.com
          </p>
          <p className="flex items-start gap-3 text-sm text-foreground/80">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            (+250) 787 709 159 / (+250) 786 280 780
          </p>
          <p className="flex items-start gap-3 text-sm text-foreground/80">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            Bugesera/Nyamata, Rwanda
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100083018477965"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-primary hover:underline"
          >
            <Facebook className="h-5 w-5" />
            Free Love Organization
          </a>
        </div>
      </div>
    </section>
  );
}
