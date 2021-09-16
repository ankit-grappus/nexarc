import Head from 'next/head'
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Welcome to Nexarc</title>
        <meta name="description" content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#823cff" />
        <meta name="description"
          content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
        <meta name="keywords" content="" />
        <meta name="theme-color" content="#823cff" />
        <meta name="msapplication-navbutton-color" content="#823cff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#823cff" />
        <meta property="og:site_name" content="Nexarc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nexarc" />
        <meta property="og:url" content="https://nexarc.grappus.sbtechzone.com/" />
        <meta property="og:image" content="https://nexarc.grappus.sbtechzone.com/static/assets/images/man-2.png" />
        <meta property="og:image:url" content="https://nexarc.grappus.sbtechzone.com/static/assets/images/man-2.png" />
        <meta property="og:image:alt" content="Nexarc" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="images/png" />
        <meta property="og:description"
          content="nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes." />
      </Head>

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
