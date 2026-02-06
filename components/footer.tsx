import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-sm font-bold">T</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
                TimeTravel
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"La premiere agence de voyage temporel certifiee par le Conseil Mondial du Temps."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="#destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Notre histoire
              </Link>
              <Link href="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Quiz
              </Link>
              <Link href="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Assistant IA
              </Link>
              <Link href="/booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reserver
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Quartier Temporel, Neo-Paris</p>
              <p>contact@timetravel.agency</p>
              <p>+33 (0)1 87 65 43 21</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"2087 - 2127 TimeTravel Agency. Tous droits reserves. Licence temporelle N 4521-CMT."}
          </p>
        </div>
      </div>
    </footer>
  )
}
