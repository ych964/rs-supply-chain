"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/supply-chain", label: "Management de la Supply Chain" },
  { href: "/debouches", label: "Debouches" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // When scrolled: always dark green bg with white text
  // When not scrolled on homepage: transparent bg with white text (hero is dark)
  // When not scrolled on other pages: white bg with dark text
  const useDarkText = !isScrolled && !isHomePage

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : isHomePage
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image src="/images/logo.jpeg" className="flex items-center gap-3 size-14 rounded-full" width={40} height={40} alt="Logo de Supply Chain"/>
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                pathname === link.href
                  ? "bg-accent/20 text-accent"
                  : useDarkText
                    ? "text-primary/80 hover:bg-primary/10 hover:text-primary"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden transition-colors ${useDarkText ? "text-primary" : "text-primary-foreground"}`}
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`border-b border-primary-foreground/10 py-3 text-sm font-medium uppercase tracking-wider transition-colors last:border-0 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
