import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Music2 } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/supply-chain", label: "Supply Chain" },
  { href: "/debouches", label: "Debouches" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://www.tiktok.com/@escm_inphb?_r=1&_t=ZS-94G6ic7T88m", icon: Music2, label: "Tiktok" },
  { href: "https://www.instagram.com/escm_inphb?igsh=MW05N3NoanRiMDRy&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/ingenieurs-en-logistique-et-transports-ilt-inp-hb/", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image src="/images/logo.jpeg" className="flex items-center gap-3 size-14 rounded-full" width={40} height={40} alt="Logo de Supply Chain"/>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {"Plateforme institutionnelle dediee au Management de la Supply Chain. Formation, debouches et opportunites professionnelles."}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>leilahline@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>{"INPHB - ESCAE - SUPPLY CHAIN MANAGEMENT"}</span>
              </div>
            </div>
            <div className="mt-2 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-accent hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {"© 2026 Management de la Supply Chain. Tous droits reserves."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            >
              Mentions legales
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
            >
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
