'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import './globals.css'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div className="home-container">
      <header>
        <h1>Student Management System</h1>
      </header>

      <main>
        <section className="section">
          <h2>Next.js Features (Phase 2)</h2>
          <div className="link-list">
            <Link href="/statistics" className="link-item highlight">
              Statistics Dashboard
            </Link>
          </div>

          <div style={{ marginTop: '3rem' }}>
            {status === 'loading' && <p>Loading...</p>}

            {session ? (
              <div>
                <p>Logged in as <strong>{session.user.name || session.user.email}</strong></p>
                <button onClick={() => signOut()}>Logout</button>
              </div>
            ) : (
              <div>
                <p>Not logged in</p>
                <button onClick={() => signIn('github')}>Login with GitHub</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
