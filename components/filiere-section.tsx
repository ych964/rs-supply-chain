"use client"

import {
  Package,
  Truck,
  BarChart3,
  Factory,
  ShoppingCart,
  Globe,
  Building2,
  BookOpen,
  Languages,
  Monitor,
  Scale,
  Briefcase,
  ClipboardList,
  Settings
} from "lucide-react"

const rolesSC = [
  {
    icon: BarChart3,
    title: "Planification et prévision",
    description:
      "Anticiper les besoins en matières premières et produits finis pour éviter les ruptures ou surplus.",
  },
  {
    icon: Package,
    title: "Gestion des stocks",
    description:
      "Optimiser les niveaux de stock pour limiter les coûts tout en garantissant la disponibilité.",
  },
  {
    icon: Factory,
    title: "Organisation de la production",
    description:
      "Planifier et suivre la fabrication des produits selon la demande.",
  },
  {
    icon: Briefcase,
    title: "Gestion des fournisseurs et des achats",
    description:
      "Sécuriser l'approvisionnement et négocier les meilleures conditions.",
  },
  {
    icon: Truck,
    title: "Distribution et transport",
    description: "Livrer les produits de manière efficace et rentable.",
  },
  {
    icon: Settings,
    title: "Analyse et amélioration continue",
    description:
      "Suivre la performance, identifier les problèmes et optimiser les processus.",
  },
]

const secteurs = [
  {
    icon: Factory,
    label: "Industrie",
    detail: "Automobile, agroalimentaire, chimie, pharmacie",
  },
  {
    icon: ShoppingCart,
    label: "Distribution & E-commerce",
    detail: "Supermarchés, plateformes de vente en ligne",
  },
  {
    icon: Truck,
    label: "Transport & Logistique",
    detail: "Routier, maritime, aérien et ferroviaire",
  },
  {
    icon: Globe,
    label: "Commerce international",
    detail: "Import/export, hubs logistiques, supply chain globale",
  },
]

const ues = [
  {
    code: "UE 1",
    title: "Langues et écrits professionnels",
    icon: Languages,
    color: "bg-blue-500/10 text-blue-600",
    matieres: [
      "Anglais",
      "Écrits professionnels",
      "Éducation Physique et Sportive",
    ],
  },
  {
    code: "UE 2",
    title: "Fondamentales et outils",
    icon: Monitor,
    color: "bg-emerald-500/10 text-emerald-600",
    matieres: [
      "Informatique et initiation ERP",
      "Contrôle statistique de la qualité",
      "Assurance des transports",
    ],
  },
  {
    code: "UE 3",
    title: "Spécialités",
    icon: Scale,
    color: "bg-amber-500/10 text-amber-600",
    matieres: ["Contentieux", "Droit fiscal", "Économie et géopolitique"],
  },
  {
    code: "UE 4",
    title: "Gestion et management opérationnel",
    icon: ClipboardList,
    color: "bg-purple-500/10 text-purple-600",
    matieres: [
      "Gestion des stocks",
      "Gestion de production",
      "Gestion des moyens généraux",
      "Management des achats",
      "Supply Chain Management",
    ],
  },
]

export function FiliereSection() {
  return (
    <>
      {/* Section 1 - Qu'est-ce que la Supply Chain */}
      <section id="equipe" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              La filière
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                {"Étude en Supply Chain Management"}
              </span>
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {"La Supply Chain, ou chaîne d'approvisionnement, est l'ensemble des processus qui permettent à une entreprise de faire arriver le bon produit, au bon endroit, au bon moment, et au moindre coût. Elle couvre toutes les étapes, depuis l'approvisionnement en matières premières, la production, le stockage, jusqu'à la distribution et la livraison aux clients."}
            </p>
          </div>

          {/* SC vs Logistique */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                La Logistique
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {"Se concentre sur la gestion des flux physiques : stockage, transport, manutention et livraison. C'est un maillon essentiel mais spécifique de la chaîne."}
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Supply Chain
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {"Est plus globale et stratégique : elle inclut la logistique, mais aussi la planification de la production, la gestion des stocks, les achats, la relation avec les fournisseurs et la coordination avec les clients."}
              </p>
            </div>
          </div>

          {/* Le transport */}
          <div className="mb-16 rounded-xl border border-border bg-secondary p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Truck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Le transport dans la Supply Chain
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {"Le transport est un élément essentiel de la Supply Chain. Il consiste à acheminer les matières premières vers les sites de production et les produits finis vers les entrepôts ou directement aux clients. Les modes de transport peuvent être variés : routier, ferroviaire, maritime ou aérien. Une bonne gestion du transport permet de réduire les coûts, optimiser les délais et assurer la fiabilité des livraisons."}
                </p>
              </div>
            </div>
          </div>

          {/* Roles en entreprise */}
          <div className="mb-4">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              En entreprise
            </span>
            <h3 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              <span className="text-balance">
                {"Rôle de la Supply Chain"}
              </span>
            </h3>
          </div>
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rolesSC.map((role) => (
              <div
                key={role.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <role.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    {role.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Secteurs */}
          <div className="mb-4">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Secteurs
            </span>
            <h3 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              <span className="text-balance">
                Entreprises concernées
              </span>
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {secteurs.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground">{s.label}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Contenu de la formation */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Programme
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">
                {"Contenu de la formation à l'INPHB"}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-primary-foreground/70">
              {"Le programme est structuré autour de quatre grandes unités d'enseignement pour former des professionnels polyvalents et opérationnels."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ues.map((ue) => (
              <div
                key={ue.code}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${ue.color}`}
                  >
                    <ue.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {ue.code}
                    </span>
                    <h3 className="font-bold text-primary-foreground">
                      {ue.title}
                    </h3>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {ue.matieres.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-3 text-sm text-primary-foreground/80"
                    >
                      <BookOpen className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm leading-relaxed text-primary-foreground/60">
            {"Ces matières permettent aux étudiants d'acquérir des compétences techniques, juridiques, économiques et managériales, ainsi qu'une bonne maîtrise des outils numériques et des méthodes de planification."}
          </p>
        </div>
      </section>


      <div className="bg-secondary py-10">
          {/* {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))} */}
        </div>
    </>
  )
}
