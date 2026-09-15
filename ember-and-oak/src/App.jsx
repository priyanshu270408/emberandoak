import React from 'react'
import { ReservationProvider } from './context/ReservationContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import SignatureDish from './components/SignatureDish'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import ReservationCTA from './components/ReservationCTA'
import Footer from './components/Footer'
import ReservationModal from './components/ReservationModal'

export default function App() {
  return (
    <ReservationProvider>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <SignatureDish />
        <Menu />
        <Experience />
        <Gallery />
        <Reviews />
        <Location />
        <ReservationCTA />
      </main>
      <Footer />
      <ReservationModal />
    </ReservationProvider>
  )
}
