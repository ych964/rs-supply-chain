"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Facebook, Instagram, Linkedin, Music2, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://www.tiktok.com/@escm_inphb?_r=1&_t=ZS-94G6ic7T88m", icon: Music2, label: "Tiktok" },
  { href: "https://www.instagram.com/escm_inphb?igsh=MW05N3NoanRiMDRy&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/ingenieurs-en-logistique-et-transports-ilt-inp-hb/", icon: Linkedin, label: "LinkedIn" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-supply-chain.jpg"
          alt="Vue aerienne d'un port logistique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Social Media Links */}
        <div className="mb-12 flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all hover:border-accent hover:bg-accent hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Management de la{" "}
            <span className="text-accent">Supply Chain</span>
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
          {"Decouvrez une filiere d'excellence formant les leaders de la logistique et de la chaine d'approvisionnement de demain."}
        </p>

        {/* CTA Arrow */}
        <Link
          href="#equipe"
          className="group flex flex-col items-center gap-3 transition-all"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent transition-colors group-hover:text-accent/80">
            {"INFORMATIONS SUR LA FILIERE ET DEBOUCHES"}
          </span>
          <div className="animate-bounce-slow flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-accent transition-all group-hover:bg-accent group-hover:text-primary">
            <ChevronDown className="h-6 w-6" />
          </div>
        </Link>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
