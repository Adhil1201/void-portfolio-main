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
          <p className="mt-5 font-mono text-sm tracking-widest text-muted-foreground">MCA STUDENT · ASPIRING IT PROFESSIONAL</p>
        </header>

        <section className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">CONTACT</p>
            <div className="mt-5 flex flex-col gap-3 font-mono text-sm text-muted-foreground">
              <a href="mailto:adhiln968@gmail.com" className="hover:text-white">adhiln968@gmail.com</a>
              <a href="https://www.linkedin.com/in/adhil-nizamudeen1901" target="_blank" rel="noreferrer" className="hover:text-white">Adhil Nizamudeen | LinkedIn</a>
              <a href="https://github.com/Adhil1201" target="_blank" rel="noreferrer" className="hover:text-white">github.com/Adhil1201</a>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">PROFILE</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                To obtain a suitable entry-level position in the IT field where I can apply my technical knowledge, develop my skills, gain practical experience, and contribute effectively to the organization.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">EDUCATION</h2>
              <div className="mt-5 flex flex-col gap-5 text-white/75">
                <div>
                  <h3 className="text-2xl font-light text-white">Master of Computer Applications (MCA)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Currently pursuing</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Bachelor of Computer Applications (BCA)</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Sree Narayana College of Technology, Kollam · University of Kerala · 2022–2025</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">TECHNICAL SKILLS</h2>
              <div className="mt-5 grid gap-3 text-sm leading-relaxed text-white/65">
                <p><span className="text-white">Programming:</span> C, C++, C#, Java, Python, PHP</p>
                <p><span className="text-white">Web:</span> HTML, CSS, React, React.js</p>
                <p><span className="text-white">Frameworks:</span> Node.js, Django</p>
                <p><span className="text-white">Database:</span> SQL, MySQL</p>
                <p><span className="text-white">Tools:</span> Visual Studio Code, Git, GitHub</p>
                <p><span className="text-white">Other:</span> Machine Learning, Data Analytics, Artificial Intelligence, MERN Stack</p>
              </div>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">PROJECTS</h2>
              <div className="mt-5 flex flex-col gap-6 text-white/65">
                <div>
                  <h3 className="text-2xl font-light text-white">Smart Attendance System</h3>
                  <p className="mt-2 leading-relaxed">Developed a web-based attendance management system using Python, Django, MySQL, HTML, and CSS, with face recognition for recording student attendance.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Carpal</h3>
                  <p className="mt-2 leading-relaxed">Developed an academic software project with application development and database-related functionality.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Gym Management System</h3>
                  <p className="mt-2 leading-relaxed">Developed a system for managing gym-related information, including database functionality for storing and managing records.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-mono text-xs tracking-[0.25em] text-[#2563eb]">CERTIFICATIONS & LANGUAGES</h2>
              <p className="mt-5 leading-relaxed text-white/65">Python and Data Analytics · IPCS Global, Kollam<br />MERN Stack Development with AI · Hexinox, Kochi<br />English · Malayalam</p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
