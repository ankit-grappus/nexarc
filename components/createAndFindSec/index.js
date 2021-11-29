import Router from 'next/router'

// styles
import "./styles.scss"

import PrimaryButton from "../button"

function CreateAndFindSec() {
  return (
    <>
      <div className="create-find--sec">
        <div className="left-sec section">
          <h1 className="heading text-white">Create your online business profile</h1>
          <div className="btn-box">
            <PrimaryButton
              className="register-btn transparent-btn btn-lg"
              buttonName="Register Now"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
              onClick={() => Router.push("https://www.nexarc.in/sign-up//")}
              nxClickEvent="NXA_CR2_REG"
            />
          </div>
          <div className="image-box">
            <img className="image" src="../../static/assets/images/man-2.png" alt="image" width="100%" height="100%" />
          </div>
        </div>
        <div className="right-sec section">
          <h1 className="heading">Find relevant leads across industries</h1>
          <div className="btn-box">
            <PrimaryButton
              className="find-btn transparent-btn btn-lg"
              buttonName="View Tenders & Quotations"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-dark.svg"
              onClick={() => Router.push("https://www.nexarc.in/tender-and-quotations//")}
              nxClickEvent="NXA_CR2_VIEW"
            />
          </div>
          <div className="image-box">
            <img className="image" src="../../static/assets/images/man-3.png" alt="image" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateAndFindSec;