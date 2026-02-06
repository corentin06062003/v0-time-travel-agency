"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/video_capcut.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
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
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="text-primary uppercase tracking-[0.3em] text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Agence de voyage temporel
        </motion.p>
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explorez le temps,{" "}
          <span className="text-primary">vivez l{"'"}histoire</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {"De l'Egypte des pharaons au Tokyo futuriste de 2150, choisissez votre epoque et embarquez pour un voyage inoubliable a travers le temps."}
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
