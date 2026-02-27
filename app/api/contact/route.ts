import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, question } = body

    if (!email || !question) {
      return NextResponse.json(
        { error: "Email et question sont obligatoires." },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      )
    }

    // Send email using Resend or fallback to a mailto-based approach
    // For now, we use the built-in fetch to send via Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Supply Chain MSC <onboarding@resend.dev>",
          to: ["contact@supplychain-msc.fr"],
          reply_to: email,
          subject: `[Contact] Nouvelle question de ${name || "Anonyme"}`,
          html: `
            <h2>Nouveau message depuis le site Supply Chain MSC</h2>
            <p><strong>Nom :</strong> ${name || "Non renseigne"}</p>
            <p><strong>Email :</strong> ${email}</p>
            <hr />
            <p><strong>Question / Preoccupation :</strong></p>
            <p>${question.replace(/\n/g, "<br />")}</p>
          `,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Resend error:", errorData)
        return NextResponse.json(
          { error: "Erreur lors de l'envoi de l'email." },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Fallback: log the message (useful for dev/testing without Resend)
    console.log("=== New Contact Form Submission ===")
    console.log("Name:", name || "Non renseigne")
    console.log("Email:", email)
    console.log("Question:", question)
    console.log("===================================")

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    )
  }
}
