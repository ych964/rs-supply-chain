"use client"

import { useEffect, useRef } from "react"

const teamMembers = [
  { name: "Amadou Diallo", role: "President" },
  { name: "Fatima Kone", role: "Vice-Presidente" },
  { name: "Ibrahim Toure", role: "Secretaire General" },
  { name: "Aissatou Barry", role: "Tresoriere" },
  { name: "Moussa Camara", role: "Responsable Communication" },
  { name: "Mariama Sow", role: "Responsable Evenements" },
  { name: "Ousmane Diop", role: "Charge de Partenariats" },
  { name: "Khadija Fall", role: "Responsable Formation" },
  { name: "Boubacar Bah", role: "Responsable Logistique" },
  { name: "Aminata Traore", role: "Community Manager" },
  { name: "Sekou Sylla", role: "Responsable Projets" },
  { name: "Ndeye Sarr", role: "Chargee de Relations" },
  { name: "Abdoulaye Ndiaye", role: "Coordinateur Academique" },
  { name: "Ramatoulaye Dia", role: "Responsable Qualite" },
  { name: "Cheikh Gueye", role: "Auditeur Interne" },
  { name: "Fatoumata Cisse", role: "Chargee d'Etudes" },
  { name: "Mamadou Kane", role: "Responsable IT" },
  { name: "Oumou Coulibaly", role: "Assistante Administrative" },
  { name: "Alpha Balde", role: "Responsable Marketing" },
  { name: "Djeneba Keita", role: "Chargee de Mission" },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

function getColorFromName(name: string) {
  const colors = [
    "bg-primary",
    "bg-muted-foreground",
    "bg-accent",
    "bg-primary/80",
    "bg-muted-foreground/80",
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

function TeamCard({ member }: { member: { name: string; role: string } }) {
  return (
    <div className="flex w-48 flex-shrink-0 flex-col items-center gap-3 px-2 md:w-56">
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full ${getColorFromName(member.name)} shadow-lg md:h-32 md:w-32`}
      >
        <span className="text-2xl font-bold text-primary-foreground md:text-3xl">
          {getInitials(member.name)}
        </span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{member.name}</p>
        <p className="text-xs text-muted-foreground">{member.role}</p>
      </div>
    </div>
  )
}

export function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= el.scrollWidth / 2) {
        scrollPosition = 0
      }
      el.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const doubled = [...teamMembers, ...teamMembers]

  return (
    <section id="equipe" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Notre reseau
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              {"Quelques Alumni"}
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-hidden py-4"
          >
            {doubled.map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
