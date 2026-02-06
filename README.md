### 👥 Équipe de Développement
- **Corentin GESSE--ENTRESSANGLE**
- **Naël Benhiba**

Projet réalisé dans le cadre du M2 Digital & IA

# TimeTravel Agency - Agence de Voyage Temporel

Une application web interactive pour une agence de voyage temporel fictive, créée avec les technologies modernes et l'intelligence artificielle.

## 🌟 Description

TimeTravel Agency est une plateforme immersive qui permet aux utilisateurs d'explorer différentes époques historiques et de réserver des voyages temporels. Le projet combine design moderne, animations fluides et intelligence artificielle pour créer une expérience utilisateur unique.

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 16.1.6 (React 19)
- **Styling** : Tailwind CSS 3.4.17
- **Animations** : Framer Motion
- **Components** : Radix UI + shadcn/ui
- **Icons** : Lucide React
- **Typography** : Playfair Display + Inter (Google Fonts)

### Backend & Data
- **Données** : JSON statique pour les destinations
- **Images** : Optimisées avec Next.js Image component
- **Lazy Loading** : Implémenté sur toutes les images et vidéos

### Développement
- **Language** : TypeScript
- **Package Manager** : npm
- **Code Quality** : ESLint + Prettier implicite

## ✨ Features Implémentées

### 🏠 Page d'accueil
- **Hero section** avec vidéo background et animations Framer Motion
- **Destinations grid** avec 10 voyages temporels uniques
- **Cards interactives** avec effets hover et micro-interactions
- **Navigation fluide** vers les pages de détail

### 🎯 Pages de Détail (`/travel/[id]`)
- **Carousel d'images** avec navigation et indicateurs
- **Informations complètes** sur chaque destination
- **Sidebar sticky** avec prix et actions
- **Design responsive** adapté à tous les écrans

### 📋 Page de Réservation (`/booking`)
- **Formulaire multi-étapes** (Destination → Détails → Contact)
- **Intégration complète** avec les données JSON
- **Loading states** et gestion d'erreurs
- **Confirmation animée** de réservation

### 💬 Assistant IA (`/chat`)
- **Interface conversationnelle** pour interagir avec Chronos
- **Bulle flottante** accessible sur toutes les pages
- **Design moderne** avec animations d'entrée

### 🎨 UI/UX
- **Animations Framer Motion** : Fade-in progressif, staggered animations
- **Micro-interactions** : Hover effects, transitions douces
- **Lazy loading** : Optimisation des performances
- **Responsive design** : Mobile-first approach

## 🤖 Outils IA Utilisés (Transparence)

### Développement de Code
- **Assistant principal** : Cascade (Claude 3.5 Sonnet) via Bolt.new
- **Génération de composants** : React/Next.js avec TypeScript
- **Optimisation** : Suggestions de performance et best practices

### Contenu et Design
- **Textes et descriptions** : Générés avec IA pour cohérence thématique
- **Structure de données** : Conçue avec assistance IA pour 10 destinations
- **UX patterns** : Recommandations d'interfaces modernes

### Chatbot IA
- **Modèle** : Llama 3.3 70B Versatile via Groq API
- **Framework** : Vercel AI SDK (@ai-sdk/react)
- **Personna** : Chronos, assistant voyage temporel
- **System prompt** : Personnalisé pour l'univers TimeTravel Agency

### Assets Visuels
- **Vidéo hero** : `video_capcut.mp4` (fournie)
- **Images destinations** : Collection thématique optimisée
- **Icons et illustrations** : Lucide React + design system

## 📁 Structure du Projet

```
v0-time-travel-agency/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Accueil
│   ├── layout.tsx          # Layout global
│   ├── travel/[id]/        # Détails des voyages
│   ├── booking/            # Réservation
│   ├── chat/               # Assistant IA
│   └── quiz/               # Quiz interactif
├── components/             # Composants React
│   ├── hero.tsx           # Hero section
│   ├── destinations.tsx   # Grid des destinations
│   ├── navbar.tsx         # Navigation
│   ├── footer.tsx         # Pied de page
│   └── chat-bubble.tsx    # Bulle de chat flottante
├── public/                 # Assets statiques
│   ├── images/            # Images des destinations
│   ├── data/              # Données JSON
│   └── video_capcut.mp4   # Vidéo hero
└── styles/                # Styles globaux
```

## 🚀 Instructions d'Installation

### Prérequis
- Node.js 18+ recommandé
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd v0-time-travel-agency

# Installer les dépendances
npm install --legacy-peer-deps

# Démarrer le serveur de développement
npm run dev
```

### Build pour production
```bash
npm run build
npm start
```

## 🎯 Destinations Temporelles Disponibles

1. **Rome Antique** (27 av. J.-C. - 117 ap. J.-C.)
2. **Paris Belle Époque** (1889 - 1914)
3. **Égypte des Pharaons** (2589 - 2504 av. J.-C.)
4. **Florence Renaissance** (1480 - 1520)
5. **Safari Préhistorique** (35 000 - 10 000 av. J.-C.)
6. **Venise des Doges** (1400 - 1600)
7. **Athènes Classique** (447 - 432 av. J.-C.)
8. **Expédition Viking** (793 - 1066)
9. **Tokyo Edo** (1603 - 1868)
10. **Civilisation Maya** (600 - 900 ap. J.-C.)

## 🔧 Configuration

### Variables d'environnement
```env
# API pour le chatbot Chronos
GROQ_API_KEY=votre_clé_api_groq

# Configuration optionnelle pour autres services
NEXT_PUBLIC_MISTRAL_API_KEY=votre_clé_api
```

### Personnalisation
- **Couleurs** : Modifier les variables CSS dans `tailwind.config.ts`
- **Polices** : Ajouter des fonts Google dans `layout.tsx`
- **Destinations** : Éditer `public/data/travels.json`

## 🎨 Design System

### Couleurs Principales
- **Primary** : HSL(38, 80%, 55%) - Or temporel
- **Background** : Thème sombre élégant
- **Foreground** : Textes hiérarchisés

### Typographie
- **Serif** : Playfair Display (titres, élégance)
- **Sans** : Inter (textes, lisibilité)

### Animations
- **Durée** : 0.6-0.8s pour fluidité naturelle
- **Easing** : easeOut, easeInOut
- **Spring physics** : éléments interactifs

## 📊 Performance

### Optimisations implémentées
- **Lazy loading** sur toutes les images
- **Video preload** : metadata uniquement
- **Code splitting** : automatique avec Next.js
- **Image optimization** : Next.js Image component
- **Animations GPU** : Framer Motion optimisé

### Métriques cibles
- **LCP** : < 2.5s (Large Contentful Paint)
- **FID** : < 100ms (First Input Delay)
- **CLS** : < 0.1 (Cumulative Layout Shift)

## 🤝 Contribuer

### Guidelines
- Utiliser TypeScript pour tout nouveau code
- Suivre les conventions de nommage existantes
- Ajouter des lazy loading pour les nouvelles images
- Tester sur mobile et desktop

### Workflow
1. Forker le projet
2. Créer une branche feature
3. Implémenter avec tests
4. Pull request avec description

## 📄 Licence

Projet pédagogique - M1/M2 Digital & IA  
**Usage éducatif uniquement** - Ne pas utiliser en production commerciale

## 🙏 Crédits

### Technologies & Librairies
- **Next.js** - Framework React par Vercel
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations React
- **Radix UI** - Composants accessibles
- **Lucide** - Icon library

### Assets
- **Images** : Collection thématique optimisée
- **Vidéo** : `video_capcut.mp4` (fournie)
- **Icons** : Lucide React

### Inspiration
- Design inspiré des agences de voyage premium
- UX patterns modernes et accessibles
- Science-fiction et voyages temporels

**Développé avec ❤️ et 🤖 pour l'apprentissage du développement web moderne.**
