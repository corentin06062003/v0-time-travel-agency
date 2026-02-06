"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#about", label: "Notre histoire" },
  { href: "/quiz", label: "Quiz" },
  { href: "/chat", label: "Assistant IA" },
  { href: "/booking", label: "Reserver" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-sm font-bold">T</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
            TimeTravel
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Voyager
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
            >
              Voyager
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
