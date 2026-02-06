"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Animated particles (decorative) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/40 rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Agence de voyage temporel
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Explorez le temps,{" "}
          <span className="text-primary">vivez l{"'"}histoire</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.7s" }}>
          {"De l'Egypte des pharaons au Tokyo futuriste de 2150, choisissez votre epoque et embarquez pour un voyage inoubliable a travers le temps."}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: "1s" }}>
          <Link
            href="#destinations"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Decouvrir les destinations
          </Link>
          <Link
            href="/chat"
            className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Parler a notre assistant
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
