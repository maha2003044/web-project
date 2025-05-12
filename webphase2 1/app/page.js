import Link from 'next/link'

// CSS can be imported directly for Server Components
import './globals.css'

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Student Management System</h1>
      </header>

      <main>
        <section className="section">
          <h2>Next.js Features (Phase 2)</h2>
          <div className="link-list">
            <Link href="/statistics" className="link-item highlight">Statistics Dashboard</Link>
          </div>
        </section>
      </main>

      
    </div>
  )
}