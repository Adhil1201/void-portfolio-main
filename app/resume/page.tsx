import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12 text-white md:px-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <Link href="/" className="font-mono text-xs tracking-[0.25em] text-muted-foreground hover:text-white">
          ← BACK TO PORTFOLIO
        </Link>

        <header className="border-b border-white/15 pb-10">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-[#2563eb]">RESUME / 2026</p>
          <h1 className="font-sans text-5xl font-light tracking-tight md:text-8xl">Adhil Nizamudeen</h1>
          <p className="mt-5 font-mono text-sm tracking-widest text-muted-foreground">MCA STUDENT</p>
        </header>

        <section className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">CONTACT</p>
            <div className="mt-5 flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              <a href="mailto:adhiln968@gmail.com" className="hover:text-white">adhiln968@gmail.com</a>
              <a href="https://www.linkedin.com/in/adhil-nizamudeen" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://github.com/Adhil1201" target="_blank" rel="noreferrer" className="hover:text-white">github.com/Adhil1201</a>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">PROFILE</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                MCA student focused on creating thoughtful digital experiences and practical software systems.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">FEATURED PROJECT</h2>
              <h3 className="mt-5 text-3xl font-light">Smart Attendance System</h3>
              <p className="mt-3 leading-relaxed text-white/65">
                A streamlined attendance platform designed to make daily check-ins, records, and administration more efficient.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">SKILLS</h2>
              <p className="mt-5 leading-relaxed text-white/65">UI design · Frontend development · Creative direction · Problem solving</p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
