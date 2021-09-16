import Helmet from '../components/Seo'
import Header from '../components/header'
import HeroSliderSec from '../components/heroSliderSec'
import LookingForSec from '../components/lookingForSec'
import CreateAndFindSec from '../components/createAndFindSec'
import TestimonialSec from '../components/testimonialSec'
import RegisterNowSec from '../components/registerNowSec'
import Footer from '../components/footer'

export default function App() {
  return (
    <div className="app-container">
      <Helmet
        title="Welcome to nexarc"
        metaContent=""
      />

      <Header />
      <HeroSliderSec />
      <div className="looking-for--sec">
        <div className="container-fluid custom">
          <LookingForSec
            secHeading="What are you looking for?"
          />
        </div>
      </div>
      <CreateAndFindSec />
      <TestimonialSec />
      <RegisterNowSec
        heading="Join the nexarc community of emerging businesses"
      />
      <Footer />

    </div>
  )
}
