"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Check,
  Calendar,
  Users,
  MapPin,
  Clock,
  Shield,
  CreditCard,
} from "lucide-react"

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

export default function BookingPage() {
  const searchParams = useSearchParams()
  const preselected = searchParams.get("destination")

  const [step, setStep] = useState(1)
  const [selectedDest, setSelectedDest] = useState(preselected || "")
  const [travelers, setTravelers] = useState("1")
  const [departureDate, setDepartureDate] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [destinations, setDestinations] = useState<Travel[]>([])
  const [loading, setLoading] = useState(true)

  const selectedDestination = destinations.find((d) => d.id === selectedDest)

  useEffect(() => {
    fetch('/data/travels.json')
      .then(response => response.json())
      .then(data => {
        setDestinations(data.travels)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading destinations:', error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (preselected && destinations.some((d) => d.id === preselected)) {
      setSelectedDest(preselected)
    }
  }, [preselected, destinations])

  const canProceedStep1 = selectedDest !== ""
  const canProceedStep2 = departureDate !== "" && travelers !== ""
  const canSubmit = name.trim() !== "" && email.trim() !== ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Reservation confirmee
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-2">
            {"Votre voyage vers "}
            <span className="text-foreground font-medium">{selectedDestination?.title}</span>
            {" a ete enregistre avec succes."}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {"Un email de confirmation a ete envoye a "}
            <span className="text-foreground">{email}</span>
            {". Nos equipes vous contacteront sous 24h pour finaliser les details."}
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Retour a l{"'"}accueil
            </Link>
            <Link
              href="/chat"
              className="border border-border text-foreground px-4 py-3 rounded-lg text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
            >
              Poser des questions à Chronos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Retour</span>
            </Link>
            <div className="w-px h-6 bg-border" />
            <h1 className="font-serif text-lg font-semibold text-foreground">Reservation</h1>
          </div>

          {/* Step indicator */}
          <div className="hidden sm:flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-8 h-px transition-colors ${
                      step > s ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            {/* Step 1: Destination */}
            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Choisissez votre destination
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Selectionnez l{"'"}epoque qui vous attire le plus.
                </p>

                <div className="flex flex-col gap-4">
                  {loading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                            <div className="w-20 h-20 rounded-lg bg-muted" />
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-muted rounded w-3/4" />
                              <div className="h-3 bg-muted rounded w-full" />
                              <div className="h-3 bg-muted rounded w-2/3" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    destinations.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => setSelectedDest(dest.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                          selectedDest === dest.id
                            ? "border-primary bg-primary/5 shadow-[0_0_20px_-5px_hsl(38,80%,55%,0.15)]"
                            : "border-border bg-card hover:border-border/80"
                        }`}
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={dest.images[0] || "/placeholder.svg"}
                            alt={dest.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{dest.title}</h3>
                            <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              {dest.period}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {dest.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {dest.duration} jours
                            </span>
                            <span className="text-xs font-medium text-foreground">
                              {dest.price.toLocaleString()} TC
                            </span>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedDest === dest.id
                              ? "border-primary bg-primary"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {selectedDest === dest.id && (
                            <Check className="h-3 w-3 text-primary-foreground" />
                          )}
                        </div>
                      </button>
                    ))
                  )}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Parametres du voyage
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Definissez la date et le nombre de voyageurs.
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="departure"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      <Calendar className="h-4 w-4 inline mr-2 text-primary" />
                      Date de depart
                    </label>
                    <input
                      type="date"
                      id="departure"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelers"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      <Users className="h-4 w-4 inline mr-2 text-primary" />
                      Nombre de voyageurs
                    </label>
                    <select
                      id="travelers"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} voyageur{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-border text-foreground py-3 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact info */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Vos coordonnees
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Entrez vos informations pour finaliser la reservation.
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jean Dupont"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jean@exemple.com"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border border-border text-foreground py-3 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirmer la reservation
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Recapitulatif
              </h3>

              {selectedDestination ? (
                <>
                  <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedDestination.images[0] || "/placeholder.svg"}
                      alt={selectedDestination.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-sm font-semibold text-foreground">
                        {selectedDestination.title}
                      </p>
                      <p className="text-xs text-primary">{selectedDestination.period}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        Destination
                      </span>
                      <span className="text-foreground">{selectedDestination.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        Durée
                      </span>
                      <span className="text-foreground">{selectedDestination.duration} jours</span>
                    </div>
                    {departureDate && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          Depart
                        </span>
                        <span className="text-foreground">
                          {new Date(departureDate).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                    )}
                    {travelers && (
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          Voyageurs
                        </span>
                        <span className="text-foreground">{travelers}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border mt-4 pt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">
                        {selectedDestination.price.toLocaleString()} TC x {travelers}
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {(selectedDestination.price * Number(travelers)).toLocaleString()} TC
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Credits temporels</p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Selectionnez une destination pour voir le recapitulatif.
                </p>
              )}

              {/* Trust signals */}
              <div className="border-t border-border mt-4 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  Protocole de securite temporelle certifie
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CreditCard className="h-3.5 w-3.5 text-primary" />
                  Paiement securise en credits temporels
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
