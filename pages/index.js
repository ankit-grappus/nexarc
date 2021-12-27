import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import HeroSliderSec from '../components/heroSliderSec'
import LookingForSec from '../components/lookingForSec'
import CreateAndFindSec from '../components/createAndFindSec'
import TestimonialSec from '../components/testimonialSec'
import RegisterNowSec from '../components/registerNowSec'
import Footer from '../components/footer'
import ScrollToTop from '../components/ScrollToTop'
import InfoHubSec from './infoHubSec'

export default function App() {
  return (
    <div className="app-container">
      <Header />
        {/* <InfoHubSec /> */}
        <HeroSliderSec />
          <div className="looking-for--sec">
            <div className="container-fluid custom">
              <LookingForSec
                secHeading=" are you looking for?"
              />
            </div>
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
