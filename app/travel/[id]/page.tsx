"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Shield,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
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

export default function TravelPage() {
  const params = useParams()
  const router = useRouter()
  const travelId = params.id as string

  const [travel, setTravel] = useState<Travel | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Images du carousel depuis le tableau images
  const getCarouselImages = (images: string[]) => {
    return images
  }

  useEffect(() => {
    fetch('/data/travels.json')
      .then(response => response.json())
      .then(data => {
        const foundTravel = data.travels.find((t: Travel) => t.id === travelId)
        setTravel(foundTravel || null)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading travel:', error)
        setLoading(false)
      })
  }, [travelId])

  const nextImage = () => {
    if (travel) {
      const images = getCarouselImages(travel.images)
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (travel) {
      const images = getCarouselImages(travel.images)
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted" />
          <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-2/3" />
          </div>
        </div>
      </div>
    )
  }

  if (!travel) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Voyage non trouvé
          </h1>
          <p className="text-muted-foreground mb-8">
            Ce voyage temporel n'existe pas ou a été déplacé.
          </p>
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const carouselImages = getCarouselImages(travel.images)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Retour</span>
          </Link>
          <h1 className="font-serif text-lg font-semibold text-foreground">
            {travel.title}
          </h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Image Carousel */}
      <div className="relative h-96 md:h-[32rem] overflow-hidden">
        <Image
          src={carouselImages[currentImageIndex]}
          alt={travel.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Carousel Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground hover:bg-background/90 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground hover:bg-background/90 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-primary"
                  : "bg-background/60"
              }`}
            />
          ))}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {travel.period}
              </span>
              <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground">
                {travel.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              {travel.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {travel.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Durée</span>
                </div>
                <p className="text-xl font-semibold text-foreground">{travel.duration} jours</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Groupe</span>
                </div>
                <p className="text-sm text-foreground">{travel.groupSize}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Lieu</span>
                </div>
                <p className="text-sm text-foreground">{travel.location}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">Difficulté</span>
                </div>
                <p className="text-sm text-foreground capitalize">{travel.difficulty}</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Points forts
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {travel.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ce qui est inclus
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {travel.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Étiquettes
              </h2>
              <div className="flex flex-wrap gap-2">
                {travel.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-6">
              {/* Price */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">À partir de</p>
                <p className="text-3xl font-bold text-foreground">
                  {travel.price.toLocaleString('fr-FR')}{" "}
                  <span className="text-sm text-muted-foreground font-normal">TC</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">Credits temporels</p>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary shrink-0" />
                  Protocole de sécurité temporelle certifié
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4 text-primary shrink-0" />
                  Paiement sécurisé en credits temporels
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-6">
                <Link
                  href={`/booking?destination=${travel.id}`}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Réserver ce voyage
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
