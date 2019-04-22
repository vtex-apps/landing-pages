import React, { Fragment, FunctionComponent } from 'react'

import Navbar from './components/IOLanding/Navbar'
import Hero from './components/IOLanding/Hero'
import CardGrid from './components/IOLanding/CardGrid'
import ProductDisplay from './components/IOLanding/Product'
import HowItWorks from './components/IOLanding/HowItWorks'
import EvolutionSection from './components/IOLanding/Evolution'
import KeyFeatures from './components/IOLanding/KeyFeatures'
import StartBuilding from './components/IOLanding/StartBuilding'
import Footer from './components/IOLanding/Footer'

const Landing: FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="w-100">
        <Hero />
        <CardGrid />
        <ProductDisplay />
        <HowItWorks />
        <EvolutionSection />
        <KeyFeatures />
        <StartBuilding />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Landing
