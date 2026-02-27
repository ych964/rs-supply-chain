"use client"

import { useState } from "react"
import { Send, CheckCircle, Mail, MessageSquare, User } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

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
            Contact
          </span>
          <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Posez votre question</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            {"Vous avez une question sur la filière, les débouchés ou l'association ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Merci pour votre message !
              </h2>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                {"Nous avons bien reçu votre question. Notre équipe vous répondra rapidement par email."}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:text-primary"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12"
            >
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {"Écrivez-nous"}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Tous les champs marqués d'un * sont obligatoires"}
                </p>
              </div>

              {formError && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {formError}
                </div>
              )}

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <User className="h-4 w-4 text-muted-foreground" />
                  Nom (optionnel)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre.email@exemple.com"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Question Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="question"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  {"Question / Préoccupation *"}
                </label>
                <textarea
                  id="question"
                  name="question"
                  required
                  rows={6}
                  placeholder="Écrivez votre question ou préoccupation ici..."
                  className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-accent hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
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

      {/* Info Section */}
      <section className="bg-secondary py-16">
      </section>
    </div>
  )
}
