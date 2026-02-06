"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

const destinations = [
  {
    id: "egypt",
    title: "Egypte Antique",
    period: "2500 av. J.-C.",
    image: "/images/egypt.jpg",
    description:
      "Marchez aux cotes des pharaons, decouvrez les mysteres des pyramides et naviguez sur le Nil au coeur de la civilisation egyptienne.",
    highlights: [
      "Visite des pyramides en construction",
      "Audience avec les pretres d'Amon",
      "Navigation sur le Nil royal",
    ],
    duration: "7 jours",
    location: "Gizeh, Memphis, Thebes",
    price: "12 500",
  },
  {
    id: "medieval",
    title: "Europe Medievale",
    period: "1200 ap. J.-C.",
    image: "/images/medieval.jpg",
    description:
      "Assistez aux tournois de chevaliers, explorez les chateaux forts et vivez la splendeur des cours royales du Moyen Age.",
    highlights: [
      "Tournoi de chevalerie",
      "Banquet au chateau du roi",
      "Visite d'une cathedrale en construction",
    ],
    duration: "5 jours",
    location: "Carcassonne, Paris, Londres",
    price: "9 800",
  },
  {
    id: "tokyo-2150",
    title: "Tokyo 2150",
    period: "2150 ap. J.-C.",
    image: "/images/tokyo-2150.jpg",
    description:
      "Plongez dans le futur ultra-technologique de Tokyo. Vehicules volants, hologrammes geants et intelligence artificielle omnipresente.",
    highlights: [
      "Vol en vehicule anti-gravitationnel",
      "Immersion en realite augmentee totale",
      "Degustation gastronomique moleculaire",
    ],
    duration: "4 jours",
    location: "Neo-Shibuya, Akihabara Orbital",
    price: "18 200",
  },
]

export function Destinations() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section id="destinations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Destinations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Choisissez votre epoque
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Trois epoques extraordinaires vous attendent. Chaque voyage est une experience unique,
            soigneusement concue pour une immersion totale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(38,80%,55%,0.15)]"
              onMouseEnter={() => setActiveCard(dest.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {dest.period}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {dest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {dest.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {dest.location}
                  </span>
                </div>

                {/* Highlights (shown on hover) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === dest.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-xs uppercase tracking-wider text-primary mb-2">
                      Points forts
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {dest.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xs text-muted-foreground">A partir de</span>
                    <p className="text-xl font-semibold text-foreground">
                      {dest.price} <span className="text-sm text-muted-foreground font-normal">TC</span>
                    </p>
                  </div>
                  <Link
                    href={`/booking?destination=${dest.id}`}
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                  >
                    <Calendar className="h-4 w-4" />
                    Reserver
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
