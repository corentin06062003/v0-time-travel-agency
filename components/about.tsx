import { Shield, Zap, Users, Compass } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Securite temporelle",
    description:
      "Notre technologie brevetee garantit un voyage sans perturbation du continuum espace-temps.",
  },
  {
    icon: Zap,
    title: "Transfert instantane",
    description:
      "Grace a la propulsion temporelle quantique, le transfert entre epoques est quasi immediat.",
  },
  {
    icon: Users,
    title: "Guides certifies",
    description:
      "Chaque epoque dispose de guides locaux formes pour assurer une immersion authentique.",
  },
  {
    icon: Compass,
    title: "Personnalisation totale",
    description:
      "Adaptez chaque aspect de votre voyage selon vos centres d'interet et preferences.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Notre histoire
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
              Pionniers du voyage temporel depuis 2087
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {"Fondee en 2087, TimeTravel Agency est la premiere agence de voyage temporel autorisee par le Conseil Mondial du Temps. Nos 40 annees d'expertise nous ont permis de perfectionner l'art du voyage temporel, offrant a nos clients des experiences sures, immersives et inoubliables."}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {"Chaque voyage est encadre par nos protocoles de securite temporelle les plus stricts, garantissant la non-interference avec le continuum historique."}
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
