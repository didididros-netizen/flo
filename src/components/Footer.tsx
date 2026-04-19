import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-nav mt-10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold gradient-text">Free Love Organization</p>
          <p className="mt-1 text-xs text-foreground/50">
            FLO Rise &amp; Shine to make a better world for Humanity
          </p>
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=100083018477965"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 transition-colors hover:text-primary"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </div>
      <p className="mt-6 text-center text-xs text-foreground/30">
        © {new Date().getFullYear()} Free Love Organization. All rights reserved.
      </p>
    </footer>
  );
}
