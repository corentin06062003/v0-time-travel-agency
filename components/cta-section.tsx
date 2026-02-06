import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card border border-border rounded-2xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
              {"Besoin d'aide pour choisir ?"}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
              {"Notre assistant IA connaît chaque époque dans les moindres détails. Posez-lui vos questions et laissez-le vous guider vers le voyage parfait."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/chat"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
              >
                Discuter avec Chronos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/booking"
                className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                Reserver directement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
