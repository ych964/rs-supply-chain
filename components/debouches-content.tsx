"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import {
  ArrowRight,
  TrendingUp,
  MapPin,
  Banknote,
  GraduationCap,
  Package,
  BarChart3,
  ClipboardList,
  Truck,
  Users,
  Settings,
  Briefcase,
  Globe,
  Search,
  FileText,
  ShieldCheck,
  Route,
  Handshake,
  Navigation,
  Ship,
  Send,
  CheckCircle,
  Mail,
  MessageSquare,
  User,
} from "lucide-react"

const metiersSupplyChain = [
  {
    icon: Users,
    title: "Directeur Supply Chain",
    description:
      "Definit et pilote la strategie globale de la chaine logistique. Il coordonne les achats, la production, la planification et la distribution afin d'assurer la performance globale de l'entreprise.",
  },
  {
    icon: Settings,
    title: "Supply Chain Manager",
    description:
      "Supervise les operations quotidiennes et optimise les flux pour garantir efficacite, maitrise des couts et respect des delais.",
  },
  {
    icon: BarChart3,
    title: "Demand Planner",
    description:
      "Analyse les donnees et les tendances du marche afin d'anticiper la demande et d'adapter les niveaux de stock.",
  },
  {
    icon: ClipboardList,
    title: "Planificateur de Production",
    description:
      "Organise les programmes de fabrication en fonction des previsions et des capacites industrielles.",
  },
  {
    icon: Package,
    title: "Responsable Approvisionnement",
    description:
      "Securise les matieres premieres et gere les relations avec les fournisseurs afin d'eviter toute rupture.",
  },
  {
    icon: Truck,
    title: "Responsable Logistique",
    description:
      "Supervise les entrepots, le stockage et la distribution des marchandises.",
  },
  {
    icon: Search,
    title: "Analyste Supply Chain",
    description:
      "Exploite les donnees pour ameliorer la performance et accompagner la prise de decision strategique.",
  },
  {
    icon: Briefcase,
    title: "Chef de Projet Supply Chain",
    description:
      "Pilote les projets d'optimisation ou de transformation des processus logistiques.",
  },
  {
    icon: FileText,
    title: "Responsable ADV",
    description:
      "Assure la gestion des commandes clients et la coordination interne entre les differents services.",
  },
  {
    icon: ShieldCheck,
    title: "Consultant Supply Chain",
    description:
      "Accompagne les entreprises dans l'amelioration et la modernisation de leurs chaines d'approvisionnement.",
  },
]

const metiersTransport = [
  {
    icon: Route,
    title: "Responsable Transport",
    description:
      "Organise et optimise les operations de transport en veillant au respect des couts, des delais et des reglementations.",
  },
  {
    icon: Handshake,
    title: "Affreteur",
    description:
      "Negocie et coordonne les solutions de transport adaptees aux besoins des clients.",
  },
  {
    icon: Navigation,
    title: "Exploitant Transport",
    description:
      "Planifie les tournees et supervise le bon deroulement des operations quotidiennes.",
  },
  {
    icon: Ship,
    title: "Commissionnaire de Transport",
    description:
      "Agit comme intermediaire entre les clients et les transporteurs pour organiser les expeditions nationales et internationales.",
  },
  {
    icon: Globe,
    title: "Responsable Logistique Internationale",
    description:
      "Gere les flux import-export et les formalites douanieres liees au commerce international.",
  },
]

const perspectives = [
  {
    icon: TrendingUp,
    title: "Evolution rapide",
    description:
      "Les professionnels de la supply chain evoluent rapidement vers des postes de direction grace a la forte demande.",
  },
  {
    icon: MapPin,
    title: "Mobilite internationale",
    description:
      "Les competences en supply chain sont recherchees partout dans le monde, offrant des opportunites a l'international.",
  },
  {
    icon: Banknote,
    title: "Remuneration attractive",
    description:
      "Les salaires dans la supply chain sont parmi les plus competitifs du secteur industriel et commercial.",
  },
  {
    icon: GraduationCap,
    title: "Digitalisation",
    description:
      "La transformation digitale ouvre de nouvelles perspectives et specialisations dans le secteur logistique.",
  },
]

function MetierCard({
  metier,
  index,
  hoveredCard,
  setHoveredCard,
  offset,
}: {
  metier: { icon: React.ElementType; title: string; description: string }
  index: number
  hoveredCard: number | null
  setHoveredCard: (i: number | null) => void
  offset: number
}) {
  const globalIndex = offset + index
  return (
    <div
      onMouseEnter={() => setHoveredCard(globalIndex)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ${
        hoveredCard === globalIndex
          ? "border-accent shadow-lg -translate-y-1"
          : "border-border"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
          hoveredCard === globalIndex
            ? "bg-accent text-primary"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <metier.icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{metier.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {metier.description}
      </p>
    </div>
  )
}

export function DebouchesContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const formRef = useRef<HTMLElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      question: formData.get("question") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Erreur lors de l'envoi.")
      }

      setIsSubmitted(true)
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Carrieres
          </span>
          <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Debouches</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            {"La Supply Chain et le Transport occupent une place strategique dans le fonctionnement des entreprises modernes. De l'approvisionnement a la livraison finale, ces secteurs regroupent des metiers varies, alliant strategie, analyse, coordination et gestion operationnelle."}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/1.jpeg"
                alt="Professionnels en reunion"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Opportunites
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">
                  Des metiers varies et strategiques
                </span>
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {"Voici quelques metiers en Supply Chain et en Transport qui offrent aujourd'hui de reelles opportunites professionnelles."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {"Ces metiers constituent des debouches dynamiques et strategiques, repondant aux enjeux actuels de performance, de competitivite et de digitalisation des entreprises."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metiers Supply Chain */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Supply Chain
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Les metiers en Supply Chain
              </span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metiersSupplyChain.map((metier, index) => (
              <MetierCard
                key={metier.title}
                metier={metier}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                offset={0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metiers Transport */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Transport
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">Les metiers en Transport</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metiersTransport.map((metier, index) => (
              <MetierCard
                key={metier.title}
                metier={metier}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                offset={100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Avenir
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                {"Perspectives d'evolution"}
              </span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {perspectives.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA - Scroll to form */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-block cursor-pointer"
          >
            <div className="rounded-2xl border-2 border-dashed border-accent/40 px-12 py-10 transition-all group-hover:border-accent group-hover:bg-accent/10">
              <p className="text-xl font-bold uppercase tracking-wide text-primary transition-colors group-hover:text-accent md:text-2xl">
                {"TOUCHE-MOI ET LAISSE TA QUESTION OU PREOCCUPATION"}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {"Clique ici pour descendre au formulaire"}
              </p>
              <ArrowRight className="mx-auto mt-4 h-6 w-6 rotate-90 text-accent transition-transform group-hover:translate-y-1" />
            </div>
          </button>
        </div>
      </section>

      {/* Inline Contact Form */}
      <section ref={formRef} className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </span>
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">
                {"Une question ? Une preoccupation ?"}
              </span>
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">
              {"N'hesitez pas a nous ecrire. Notre equipe se fera un plaisir de vous repondre."}
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-12 text-center backdrop-blur-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">
                Merci pour votre message !
              </h3>
              <p className="max-w-md leading-relaxed text-primary-foreground/70">
                {"Nous avons bien recu votre question. Notre equipe vous repondra rapidement par email."}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormError(null)
                }}
                className="mt-4 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent/90"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm md:p-12"
            >
              {formError && (
                <div className="rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-200">
                  {formError}
                </div>
              )}

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="debouches-name"
                  className="flex items-center gap-2 text-sm font-medium text-primary-foreground"
                >
                  <User className="h-4 w-4 text-accent" />
                  Nom (optionnel)
                </label>
                <input
                  type="text"
                  id="debouches-name"
                  name="name"
                  placeholder="Votre nom"
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="debouches-email"
                  className="flex items-center gap-2 text-sm font-medium text-primary-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="debouches-email"
                  name="email"
                  required
                  placeholder="votre.email@exemple.com"
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Question Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="debouches-question"
                  className="flex items-center gap-2 text-sm font-medium text-primary-foreground"
                >
                  <MessageSquare className="h-4 w-4 text-accent" />
                  {"Question / Preoccupation *"}
                </label>
                <textarea
                  id="debouches-question"
                  name="question"
                  required
                  rows={5}
                  placeholder="Ecrivez votre question ou preoccupation ici..."
                  className="resize-none rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
