import React from 'react'
import CinematicHillRoad from '@/Components/Core/CinematicHillRoad'

import { LuxuryNavbar } from '@/Components/sections/LuxuryNavbar'
import Hero from '@/Components/sections/Hero'
import LuxuryZoomParallax from '@/Components/Core/LuxuryZoomParallax'
import Properties from '@/Components/sections/Properties'
import LuxuryScrollSection from '@/Components/sections/LuxuryScrollSection'
import RealEstateNewsSection from '@/Components/sections/RealEstateNewsSection'
import LuxuryStatsSection from '@/Components/sections/LuxuryStatsSection'
import LuxuryContactEnding from '@/Components/sections/LuxuryContactEnding'
import ExecutiveImpactCarousel from '@/Components/Core/ExecutiveImpactCarousel'
const page = () => {
  return (
    <div>
      <LuxuryNavbar/>
      <Hero/>
      <LuxuryZoomParallax/>
      <CinematicHillRoad/>
      <ExecutiveImpactCarousel/>
      <LuxuryScrollSection/>
      
      <Properties/>
      <RealEstateNewsSection/>
      <LuxuryStatsSection/>
      
      <LuxuryContactEnding/>
      
      
      
    </div>
  )
}

export default page
