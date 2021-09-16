import { useState } from "react";
// styles
import "./styles.scss"

import { Carousel } from "react-bootstrap";
import { carouselItems } from "./sliderData";

function HeroSliderSec() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="hero-carousel--sec">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
        >
          {carouselItems.map((item, index) => {
            return (
              <Carousel.Item>
                <Carousel.Caption>
                  {item.sliderContent}
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}
export default HeroSliderSec;