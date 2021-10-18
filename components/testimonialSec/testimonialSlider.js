import { useEffect, useRef, useState } from "react";
// styles
import "./styles.scss"

import Slider from "react-slick";

import PrimaryButton from "../button";
import { sliderData, thumbnailData,nexaCustomerData } from "./testimonialData";

function TestimonialSlider() {

  // const media = window.matchMedia(`(max-width: 1024px)`);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [testimonialData, setTestimonialData] = useState([])

  const slider1 = useRef();
  const slider2 = useRef();

  const fetchTestimonials = async () => {
    const response = await fetch('https://www.nexarc.in/per/g04/pub/2190/iONAppsHub/instance/staticpages/front-end/static-appcode/api/grappus-api/homepage.json');
    const data = await response.json();
    setTestimonialData(data)
    
  }
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    fetchTestimonials();
  }, []);

  console.log("testing",testimonialData)

  var settings = {
    // dots: (media.matches === true ? true : null),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={slider1 => setNav1(slider1)}
        arrows={false}
        adaptiveHeight={true}
        className="sliderData-slider"
      >
        {nexaCustomerData.map((item, index) => {
          return (
            <>
              <div className="slider-content-block" key={index}>
                <div className="slider-content">
                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <div className="media-box">
                        <video>
                          <source src={item.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="testimonial-content">
                        <div className="message">{item.quote}</div>
                        <div className="user-name">{item.name}</div>
                        <div className="user-details">{item.companyLocation}</div>
                        <div className="action-box">
                          <PrimaryButton
                            buttonName="Try now"
                            className="try-now-btn transparent-btn btn-lg"
                            btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-dark.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={3}
        slidesToScroll={1}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
        className="thumbnail-slider"
      >
        {nexaCustomerData.map((data, index) => {
          return (
            <>
              <div key={index} className="slider-thumbnail-block">
                <div className="thumbnail-content fx fx--ai-c">
                  <div className="user-img-box mr--20">
                    <img className="user-img" src={data.image} alt="user icon" width="52" height="52" />
                  </div>
                  <div className="user-details-box">
                    <div className="username">{data.name}</div>
                    <div className="user-details">{data.companyName}</div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}
export default TestimonialSlider;