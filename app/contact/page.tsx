"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
    setStatus(response.ok ? "sent" : "error")
    if (response.ok) form.reset()
  }

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground md:px-12">
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-foreground/20 pb-6">
        <Link href="/" className="font-mono text-sm uppercase tracking-widest">AN / 01</Link>
        <Link href="/" className="font-mono text-xs uppercase tracking-widest underline underline-offset-4">Back home</Link>
      </header>
      <section className="mx-auto grid max-w-6xl gap-14 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">Open channel</p>
          <h1 className="max-w-xl text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-8xl">Let&apos;s make something clear.</h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">Have a project, collaboration, or idea worth exploring? Send a note and it will land directly with Adhil.</p>
          <a href="mailto:adhiln968@gmail.com" className="mt-10 inline-flex items-center gap-3 font-mono text-sm underline underline-offset-8"><Mail className="size-4" />adhiln968@gmail.com<ArrowUpRight className="size-4" /></a>
        </div>
        <form onSubmit={handleSubmit} className="border border-foreground/20 bg-card p-6 md:p-10">
          <div className="grid gap-6">
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest">Name<input name="name" required className="border-b border-foreground/30 bg-transparent py-3 font-sans text-lg outline-none focus:border-primary" placeholder="Your name" /></label>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest">Email<input name="email" type="email" required className="border-b border-foreground/30 bg-transparent py-3 font-sans text-lg outline-none focus:border-primary" placeholder="you@example.com" /></label>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest">Message<textarea name="message" required rows={5} className="resize-none border-b border-foreground/30 bg-transparent py-3 font-sans text-lg outline-none focus:border-primary" placeholder="Tell me about it" /></label>
            <button disabled={status === "sending"} className="mt-4 inline-flex items-center justify-center gap-3 bg-primary px-5 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80 disabled:opacity-50"><Send className="size-4" />{status === "sending" ? "Sending..." : "Send message"}</button>
            {status === "sent" && <p role="status" className="flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" />Message sent successfully.</p>}
            {status === "error" && <p role="alert" className="text-sm text-destructive">Something went wrong. Please email me directly.</p>}
          </div>
        </form>
      </section>
    </main>
  )
}
