import { streamText, convertToModelMessages } from "ai"
import { createGroq } from "@ai-sdk/groq"
import { openai } from "some-openai-package" // Import openai here

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

const SYSTEM_PROMPT = `Tu es Chronos, l'assistant IA de TimeTravel Agency, la premiere agence de voyage temporel au monde.

Tu aides les clients a decouvrir les destinations et a planifier leur voyage temporel.

Voici les 3 destinations disponibles :

1. **Egypte Antique (2500 av. J.-C.)**
   - Prix : a partir de 12 500 TC (credits temporels)
   - Duree : 7 jours
   - Points forts : Visite des pyramides en construction, audience avec les pretres d'Amon, navigation sur le Nil royal
   - Lieux : Gizeh, Memphis, Thebes

2. **Europe Medievale (1200 ap. J.-C.)**
   - Prix : a partir de 9 800 TC
   - Duree : 5 jours
   - Points forts : Tournoi de chevalerie, banquet au chateau du roi, visite d'une cathedrale en construction
   - Lieux : Carcassonne, Paris, Londres

3. **Tokyo 2150**
   - Prix : a partir de 18 200 TC
   - Duree : 4 jours
   - Points forts : Vol en vehicule anti-gravitationnel, immersion en realite augmentee totale, degustation gastronomique moleculaire
   - Lieux : Neo-Shibuya, Akihabara Orbital

Regles :
- Reponds toujours en francais
- Sois enthousiaste et mysterieux
- Utilise un ton luxueux et professionnel
- Si on te pose des questions hors sujet, ramene poliment la conversation vers le voyage temporel
- Suggere des destinations en fonction des preferences du client
- Encourage les clients a reserver via la page de reservation du site
- Tu peux repondre aux questions frequentes sur la securite temporelle, les protocoles de voyage, et les conditions de reservation`

function getModel() {
  return groq("llama-3.3-70b-versatile")
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: getModel(),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
    })

    return result.toUIMessageStreamResponse()
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error"

    if (
      message.includes("API key") ||
      message.includes("authentication") ||
      message.includes("401")
    ) {
      return Response.json(
        {
          error:
            "La cle API Groq est invalide ou manquante. Veuillez verifier votre GROQ_API_KEY dans les variables d'environnement.",
        },
        { status: 503 },
      )
    }

    return Response.json(
      { error: "Une erreur est survenue. Veuillez reessayer." },
      { status: 500 },
    )
  }
}
