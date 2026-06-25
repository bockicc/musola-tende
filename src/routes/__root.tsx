import { Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/layout/PageTransition'
import { LoadingScreen } from '@/components/sections/LoadingScreen'
import { BackToTop } from '@/components/sections/BackToTop'

export default function RootLayout() {
  return (
    <>
      <LoadingScreen />
      <div className="flex min-h-screen flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-primary)]/30">
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
