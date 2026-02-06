"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizAnswer {
  question: number
  answer: string
}

interface Destination {
  name: string
  period: string
  description: string
  experiences: string[]
  image: string
  score: number
}

const questions = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { value: "culture", label: "Culturelle et artistique" },
      { value: "adventure", label: "Aventure et nature" },
      { value: "elegance", label: "Élégance et raffinement" }
    ]
  },
  {
    id: 2,
    question: "Votre période préférée ?",
    options: [
      { value: "modern", label: "Histoire moderne (XIXe-XXe siècle)" },
      { value: "ancient", label: "Temps anciens et origines" },
      { value: "renaissance", label: "Renaissance et classicisme" }
    ]
  },
  {
    id: 3,
    question: "Vous préférez :",
    options: [
      { value: "urban", label: "L'effervescence urbaine" },
      { value: "nature", label: "La nature sauvage" },
      { value: "art", label: "L'art et l'architecture" }
    ]
  },
  {
    id: 4,
    question: "Votre activité idéale :",
    options: [
      { value: "monuments", label: "Visiter des monuments" },
      { value: "wildlife", label: "Observer la faune" },
      { value: "museums", label: "Explorer des musées" }
    ]
  }
]

const destinations: Destination[] = [
  {
    name: "Rome Antique",
    period: "27 av. J.-C. - 476 ap. J.-C.",
    description: "Plongez au cœur de l'Empire romain, entre monuments grandioses et vie culturelle intense.",
    experiences: ["Visite du Colisée", "Forum romain", "Bains publics", "Cirque Maximus"],
    image: "🏛️",
    score: 0
  },
  {
    name: "Paris Belle Époque",
    period: "1870-1914",
    description: "Découvrez l'âge d'or parisien, entre effervescence artistique et élégance raffinée.",
    experiences: ["Tour Eiffel", "Cabarets", "Expositions universelles", "Cafés littéraires"],
    image: "🗼",
    score: 0
  },
  {
    name: "Égypte des Pharaons",
    period: "3100-30 av. J.-C.",
    description: "Explorez la civilisation égyptienne à son apogée, entre pyramides et mystères anciens.",
    experiences: ["Pyramides de Gizeh", "Vallée des Rois", "Temple de Karnak", "Croisière sur le Nil"],
    image: "🔺",
    score: 0
  },
  {
    name: "Florence Renaissance",
    period: "1400-1600",
    description: "Immergez-vous dans le berceau de la Renaissance, entre chefs-d'œuvre artistiques et innovation.",
    experiences: ["Galerie des Offices", "Dôme de Florence", "Pont Vecchio", "Ateliers d'artistes"],
    image: "🎨",
    score: 0
  },
  {
    name: "Safari Préhistorique",
    period: "2 millions d'années av. J.-C.",
    description: "Observez la faune de la Préhistoire dans son habitat naturel pour une aventure inoubliable.",
    experiences: ["Observation de mammouths", "Chasse primitive", "Grottes préhistoriques", "Survie ancestrale"],
    image: "🦣",
    score: 0
  },
  {
    name: "Venise des Doges",
    period: "697-1797",
    description: "Vivez la splendeur de la Séréniss République, entre canaux, palais et raffinement vénitien.",
    experiences: ["Balade en gondole", "Palais des Doges", "Carnaval de Venise", "Îles de la lagune"],
    image: "🚤",
    score: 0
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [showResult, setShowResult] = useState(false)
  const [recommendedDestination, setRecommendedDestination] = useState<Destination | null>(null)

  const handleAnswer = (value: string) => {
    const newAnswer: QuizAnswer = {
      question: currentQuestion + 1,
      answer: value
    }
    
    const updatedAnswers = [...answers.filter(a => a.question !== currentQuestion + 1), newAnswer]
    setAnswers(updatedAnswers)
  }

  const calculateDestination = () => {
    const destinationScores = destinations.map(dest => ({ ...dest, score: 0 }))

    answers.forEach(answer => {
      switch (answer.answer) {
        case "culture":
          destinationScores[0].score += 2 // Rome
          destinationScores[3].score += 3 // Florence
          destinationScores[5].score += 2 // Venise
          break
        case "adventure":
          destinationScores[4].score += 3 // Safari
          destinationScores[2].score += 2 // Égypte
          break
        case "elegance":
          destinationScores[1].score += 3 // Paris
          destinationScores[5].score += 2 // Venise
          break
        case "modern":
          destinationScores[1].score += 3 // Paris
          break
        case "ancient":
          destinationScores[0].score += 2 // Rome
          destinationScores[2].score += 3 // Égypte
          destinationScores[4].score += 2 // Safari
          break
        case "renaissance":
          destinationScores[3].score += 3 // Florence
          destinationScores[5].score += 2 // Venise
          break
        case "urban":
          destinationScores[0].score += 2 // Rome
          destinationScores[1].score += 3 // Paris
          destinationScores[3].score += 2 // Florence
          destinationScores[5].score += 2 // Venise
          break
        case "nature":
          destinationScores[4].score += 3 // Safari
          destinationScores[2].score += 2 // Égypte
          break
        case "art":
          destinationScores[3].score += 3 // Florence
          destinationScores[0].score += 2 // Rome
          destinationScores[5].score += 2 // Venise
          break
        case "monuments":
          destinationScores[0].score += 3 // Rome
          destinationScores[2].score += 2 // Égypte
          break
        case "wildlife":
          destinationScores[4].score += 3 // Safari
          break
        case "museums":
          destinationScores[3].score += 3 // Florence
          destinationScores[1].score += 2 // Paris
          break
      }
    })

    const bestDestination = destinationScores.reduce((prev, current) => 
      prev.score > current.score ? prev : current
    )

    setRecommendedDestination(bestDestination)
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateDestination()
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setRecommendedDestination(null)
  }

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.question === currentQuestion + 1)
    return answer?.answer || ""
  }

  if (showResult && recommendedDestination) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Votre Destination Idéale
              </h1>
              <p className="text-lg text-muted-foreground">
                Découvrez le voyage temporel parfait pour vous
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 text-center">
                <div className="text-6xl mb-4">{recommendedDestination.image}</div>
                <h2 className="text-3xl font-serif font-bold mb-2">
                  {recommendedDestination.name}
                </h2>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{recommendedDestination.period}</span>
                </div>
              </div>

              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
                  {recommendedDestination.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Expériences recommandées
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {recommendedDestination.experiences.map((experience, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{experience}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/booking">
                      Réserver ce voyage
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={resetQuiz}>
                    Refaire le quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Quiz de Destination Temporelle
            </h1>
            <p className="text-lg text-muted-foreground">
              Répondez à ces questions pour trouver votre voyage idéal
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={getCurrentAnswer()}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="text-base cursor-pointer flex-1 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Précédent
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!getCurrentAnswer()}
                  className="gap-2"
                >
                  {currentQuestion === questions.length - 1 ? "Voir le résultat" : "Suivant"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
