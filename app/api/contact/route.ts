import { Resend } from "resend"

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await request.json()
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (!name || !email || !message || message.length > 5000 || !email.includes("@")) {
    return Response.json({ error: "Invalid form submission" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: `Portfolio contact <onboarding@resend.dev>`,
    to: ["adhiln968@gmail.com"],
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  }, { idempotencyKey: `portfolio-contact/${crypto.randomUUID()}` })

  if (error) return Response.json({ error: "Unable to send message" }, { status: 502 })
  return Response.json({ ok: true })
}
