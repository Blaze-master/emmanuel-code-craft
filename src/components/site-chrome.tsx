import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-semibold tracking-tight">
          Emmanuel Ewuoso
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#projects" className="transition hover:text-foreground">Projects</a>
          <a href="/#about" className="transition hover:text-foreground">About</a>
          <a href="/#skills" className="transition hover:text-foreground">Skills</a>
          <a href="/#experience" className="transition hover:text-foreground">Experience</a>
          <a href="/#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="mailto:ewuoso03@gmail.com"
          className="hidden rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium transition hover:border-foreground/40 md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Emmanuel Ewuoso. Built with care.</p>
        <div className="flex gap-6">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://www.linkedin.com/in/emmanuel-ewuoso-0005801b8/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:ewuoso03@gmail.com" className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
