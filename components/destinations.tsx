"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, Clock, ArrowRight, Users, Zap } from "lucide-react"

interface Travel {
  id: string
  title: string
  period: string
  description: string
  price: number
  duration: number
  location: string
  highlights: string[]
  images: string[]
  category: string
  difficulty: string
  groupSize: string
  included: string[]
  tags: string[]
}

export function Destinations() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [travels, setTravels] = useState<Travel[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/data/travels.json')
      .then(response => response.json())
      .then(data => {
        setTravels(data.travels.slice(0, 6)) // Show first 6 travels
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading travels:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="destinations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Destinations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Choisissez votre époque
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-muted rounded-t-xl" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="destinations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Destinations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Choisissez votre époque
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Découvrez nos voyages temporels extraordinaires. Chaque destination est une expérience unique,
            soigneusement conçue pour une immersion totale.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {travels.map((travel: Travel, index: number) => (
            <motion.div
              key={travel.id}
              className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(38,80%,55%,0.15)]"
              onMouseEnter={() => setActiveCard(travel.id)}
              onMouseLeave={() => setActiveCard(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden cursor-pointer group"
                   onClick={() => router.push(`/travel/${travel.id}`)}>
                <Image
                  src={travel.images[0] || "/placeholder.svg"}
                  alt={travel.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {travel.period}
                </div>
                {/* Voir plus overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Voir les détails</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {travel.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {travel.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {travel.duration} jours
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {travel.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    {travel.groupSize}
                  </span>
                </div>

                {/* Highlights (shown on hover) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === travel.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-xs uppercase tracking-wider text-primary mb-2">
                      Points forts
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {travel.highlights.slice(0, 3).map((highlight: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xs text-muted-foreground">À partir de</span>
                    <p className="text-xl font-semibold text-foreground">
                      {travel.price.toLocaleString('fr-FR')} <span className="text-sm text-muted-foreground font-normal">€</span>
                    </p>
                  </div>
                  <Link
                    href={`/booking?destination=${travel.id}`}
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                  >
                    <Calendar className="h-4 w-4" />
                    Réserver
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
