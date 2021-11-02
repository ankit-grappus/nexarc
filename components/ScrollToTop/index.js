import React, { useEffect, useState } from "react";
// styles
import "./styles.scss"
import iconGoToTop from "../../static/assets/images/go-to-top.svg"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img
            className="icon"
            src={iconGoToTop}
            alt="Go to top"
          />
        </div>
      )}
    </>
  );
}
