import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import FeatureDetail from './pages/FeatureDetail'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Trial from './pages/Trial'
import BookDemo from './pages/BookDemo'
import ForVertical from './pages/ForVertical'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DataDeletion from './pages/DataDeletion'
import SmsConsent from './pages/SmsConsent'
import PlatformPrivacy from './pages/PlatformPrivacy'
import PlatformTerms from './pages/PlatformTerms'
import Dpia from './pages/Dpia'
import Dpa from './pages/Dpa'
import Trust from './pages/Trust'
import Migrate from './pages/Migrate'
import Contact from './pages/Contact'
import SubProcessors from './pages/SubProcessors'
import Status from './pages/Status'
import Brand from './pages/Brand'
import Reviews from './pages/Reviews'
import CookieConsent from './components/CookieConsent'

function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = decodeURIComponent(hash.replace(/^#/, ''))
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <HashScroll />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/trial" element={<Trial />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/for/:slug" element={<ForVertical />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/sms-consent" element={<SmsConsent />} />
            <Route path="/platform-privacy" element={<PlatformPrivacy />} />
            <Route path="/platform-terms" element={<PlatformTerms />} />
            <Route path="/dpia" element={<Dpia />} />
            <Route path="/dpa" element={<Dpa />} />
            <Route path="/subprocessors" element={<SubProcessors />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/migrate" element={<Migrate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/status" element={<Status />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  )
}
