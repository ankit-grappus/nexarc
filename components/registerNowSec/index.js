import Router from 'next/router'

// styles
import "./styles.scss"

import PrimaryButton from "../button";
import TataEnterpriseText from "../tataEnterpriseText";

function RegisterNowSec({ heading }) {
  return (
    <>
      <div className="register-now--sec">
        <div className="container-fluid custom">
          <div className="content-box">
            <TataEnterpriseText />
            <h1 className="heading text-white">{heading}</h1>
            <PrimaryButton
              className="register-btn primary btn-lg"
              buttonName="Register Now"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
              onClick={() => Router.push("https://www.nexarc.in/sign-up//")}
              nx-click-event="NXA_CR4_REG"
            />
          </div>
          <div className="image-box">
            {/* <img className="arc absolute" src={arc} alt="arc" /> */}
            <img className="user absolute" src="../../static/assets/images/man-with-arc.png" alt="user" width="624" height="100%" />
            {/* <img className="cornerArc absolute" src={cornerArc} alt="cornerArc" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterNowSec;