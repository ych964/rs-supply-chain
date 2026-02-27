"use client"

import Image from "next/image"
import {
  Package,
  TrendingUp,
  Settings,
  BarChart3,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const competences = [
  {
    icon: Package,
    title: "Gestion des approvisionnements",
    description:
      "Maitrise des flux de matieres premieres, negociation fournisseurs et optimisation des couts d'achat.",
  },
  {
    icon: TrendingUp,
    title: "Planification de la demande",
    description:
      "Previsions de ventes, gestion des stocks et equilibrage entre offre et demande sur les marches.",
  },
  {
    icon: Settings,
    title: "Optimisation des processus",
    description:
      "Amelioration continue, Lean Management, Six Sigma et digitalisation des operations logistiques.",
  },
  {
    icon: BarChart3,
    title: "Analyse de donnees",
    description:
      "Utilisation des outils analytiques pour piloter la performance et anticiper les tendances du marche.",
  },
  {
    icon: Truck,
    title: "Transport & Distribution",
    description:
      "Gestion multimodale des transports, optimisation des tournees et pilotage des entrepots.",
  },
  {
    icon: ShieldCheck,
    title: "Gestion des risques",
    description:
      "Identification des vulnerabilites, plans de continuite et resilience de la chaine logistique.",
  },
]

const secteurs = [
  "Industrie automobile",
  "Agroalimentaire",
  "Grande distribution",
  "E-commerce",
  "Industrie pharmaceutique",
  "Transport & Logistique",
  "Energie",
  "Aeronautique",
]

export function SupplyChainContent() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Tout savoir
          </span>
          <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Le Management de la{" "}
              <span className="text-accent">Supply Chain</span>
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            {"Comprendre les enjeux, les competences et l'importance strategique de la gestion de la chaine d'approvisionnement dans le monde moderne."}
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Definition
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                {"Qu'est-ce que le Supply Chain Management ?"}
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground">
                <p className="leading-relaxed">
                  {"Le Supply Chain Management (SCM) designe l'ensemble des processus lies a la gestion des flux de produits, d'informations et de finances, depuis l'approvisionnement en matieres premieres jusqu'a la livraison du produit final au consommateur."}
                </p>
                <p className="leading-relaxed">
                  {"C'est une discipline strategique qui vise a optimiser l'efficacite, reduire les couts et ameliorer la satisfaction client a chaque etape de la chaine de valeur."}
                </p>
                <p className="leading-relaxed">
                  {"Dans un monde globalise et en constante evolution, le management de la supply chain est devenu un avantage concurrentiel majeur pour les entreprises de toutes tailles et de tous secteurs."}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/3.jpeg"
                alt="Entrepot logistique moderne"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Competences */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Competences
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Les competences cles de la Supply Chain
              </span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competences.map((comp) => (
              <div
                key={comp.title}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                  <comp.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {comp.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Processus
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                {"Les etapes cles de la chaine d'approvisionnement"}
              </span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {[
              { step: "01", title: "Approvisionnement", desc: "Selection et gestion des fournisseurs" },
              { step: "02", title: "Production", desc: "Transformation et fabrication des produits" },
              { step: "03", title: "Stockage", desc: "Gestion des entrepots et inventaires" },
              { step: "04", title: "Distribution", desc: "Transport et livraison des marchandises" },
              { step: "05", title: "Service Client", desc: "Satisfaction et retour d'experience" },
            ].map((item, index) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-accent">
                  {item.step}
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                {index < 4 && (
                  <div className="absolute -right-4 top-8 hidden text-accent md:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Secteurs
              </span>
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">
                  Des secteurs diversifiés et porteurs
                </span>
              </h2>
              <p className="mb-8 text-primary-foreground/70 leading-relaxed">
                {"Le management de la supply chain offre des opportunites dans une grande variete de secteurs economiques, chacun avec ses propres defis et innovations."}
              </p>
              <div className="flex flex-wrap gap-3">
                {secteurs.map((secteur) => (
                  <span
                    key={secteur}
                    className="rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/80 transition-all hover:border-accent hover:text-accent"
                  >
                    {secteur}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/logistics-global.jpg"
                alt="Reseau logistique mondial"
                width={600}
                height={450}
                className="h-fullw-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              {"Interesse par les debouches ?"}
            </span>
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            {"Decouvrez les metiers, les opportunites professionnelles et les perspectives d'evolution dans le domaine de la supply chain."}
          </p>
          <Link
            href="/debouches"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-accent hover:text-primary"
          >
            Découvrir les débouchés
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
