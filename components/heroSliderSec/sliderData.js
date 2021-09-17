import TataEnterpriseText from "../tataEnterpriseText";
import PrimaryButton from "../button";

// slide 1
export const Slider1Data = () => {
  return (
    <>
      <div className="slider-content slide-1 center">
        <h3 className="heading mx-auto lg">nexarc helps you grow your business</h3>
        <TataEnterpriseText />
      </div>
    </>
  )
}

// slide 2
export const Slider2Data = () => {
  return (
    <>
      <div className="slider-content slide-2">
        <h3 className="heading md">Are you ready for E-invoicing*?</h3>
        <p className="description text-white">Try the simple & affordable E-invoicing solutions from TCS</p>
        <PrimaryButton
          className="know-more-btn primary btn-lg"
          buttonName="Know more"
          btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
        />
        <img className="slider-rt-image absolute" src="../../static/assets/images/lappy-with-paper-plane.png" alt="lappy" width="647" height="414" />
      </div>
    </>
  )
}

// slide 3
export const Slider3Data = () => {
  return (
    <>
      <div className="slider-content slide-3">
        <h3 className="heading md">Worried about document security?</h3>
        <p className="description text-white">Store and share files securely with TCS ION Document manager</p>
        <PrimaryButton
          className="know-more-btn primary btn-lg"
          buttonName="Request a demo"
          btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
        />
        <img className="slider-rt-image absolute" src="../../static/assets/images/data-protection.png" alt="lappy" width="647" height="414" />
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