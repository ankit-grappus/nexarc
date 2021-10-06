import TataEnterpriseText from "../tataEnterpriseText";
import PrimaryButton from "../button";

// slide 1
export const Slider1Data = () => {
  return (
    <>
      <div className="slider-content slide-1">
        {/* <h3 className="heading mx-auto lg">nexarc helps you grow your business</h3>
        <TataEnterpriseText /> */}
          <img className="slider-rt-image absolute" src="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/marketing-banner/1st_bannerBigScreen_20210901_1855@2x.jpg" alt="lappy" width="100%" height="400px" />
      </div>
    </>
  )
}

// slide 2
export const Slider2Data = () => {
  return (
    <>
      <div className="slider-content slide-2">
        {/* <h3 className="heading md">Are you ready for E-invoicing*?</h3>
        <p className="description text-white">Try the simple & affordable E-invoicing solutions from TCS</p>
        <PrimaryButton
          className="know-more-btn primary btn-lg"
          buttonName="Know more"
          btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
        /> */}
        <img className="slider-rt-image absolute" src="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/marketing-banner/3rd_bannerBigScreen_20210901_1855@2x.png" alt="lappy" width="100%" height="500px" />
      </div>
    </>
  )
}

// slide 3
export const Slider3Data = () => {
  return (
    <>
      <div className="slider-content slide-3">
        {/* <h3 className="heading md">Worried about document security?</h3>
        <p className="description text-white">Store and share files securely with TCS ION Document manager</p> */}
        {/* <PrimaryButton
          className="know-more-btn primary btn-lg"
          buttonName="Request a demo"
          btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
          width="100%" height="296"
        /> */}
        <img className="slider-rt-image absolute" src="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/marketing-banner/2nd_bannerBigScreen_20210901_1855@2x.png" alt="lappy" width="100%" height="400px" />
      </div>
    </>
  )
}

export const carouselItems = [
  {
    sliderContent: <Slider1Data />
  },
  {
    sliderContent: <Slider2Data />
  },
  {
    sliderContent: <Slider3Data />
  },
]