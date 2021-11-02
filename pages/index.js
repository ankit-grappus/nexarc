import Head from 'next/head'
import Header from '../components/header'
import HeroSliderSec from '../components/heroSliderSec'
import LookingForSec from '../components/lookingForSec'
import CreateAndFindSec from '../components/createAndFindSec'
import TestimonialSec from '../components/testimonialSec'
import RegisterNowSec from '../components/registerNowSec'
import Footer from '../components/footer'
import ScrollToTop from '../components/ScrollToTop'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSliderSec />
      <div className="looking-for--sec">
        <h1 className="container-fluid custom">
          <LookingForSec
            secHeading="What are you looking for?"
          />
        </h1>
      </div>
      <CreateAndFindSec />
      <TestimonialSec />
      <RegisterNowSec
        heading="Join the nexarc community of emerging businesses"
      />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
