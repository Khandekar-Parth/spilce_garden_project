import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Navbar is fixed; pages with heroes pad themselves, others need offset */}
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
