"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, Globe, Users } from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Diplomes formes",
  },
  {
    icon: Briefcase,
    value: 95,
    suffix: "%",
    label: "Taux d'insertion",
  },
  {
    icon: Globe,
    value: 30,
    suffix: "+",
    label: "Partenaires entreprises",
  },
  {
    icon: Users,
    value: 20,
    suffix: "",
    label: "Membres actifs",
  },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, isVisible])

  return count
}

function StatCard({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0]
  isVisible: boolean
}) {
  const count = useCountUp(stat.value, isVisible)

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
        <stat.icon className="h-7 w-7 text-primary" />
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-primary md:text-4xl">
          {count}
          {stat.suffix}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-secondary py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 bg-secondary py-20">
          {/* {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))} */}
        </div>
      </div>
    </section>
  )
}
