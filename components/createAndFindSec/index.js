import Router from 'next/router'

// styles
import "./styles.scss"

import PrimaryButton from "../button"

function CreateAndFindSec() {
  return (
    <>
      <div className="create-find--sec">
        <div className="left-sec section">
          <div className="heading text-white">Create your online business profile</div>
          <div className="btn-box">
            <PrimaryButton
              className="register-btn transparent-btn"
              buttonName="Register Now"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-white.svg"
              onClick={() => Router.push("https://www.nexarc.in/sign-up//")}
            />
          </div>
          <div className="image-box">
            <img className="image" src="../../static/assets/images/man-2.png" alt="image" width="100%" height="100%" />
          </div>
        </div>
        <div className="right-sec section">
          <div className="heading">Find relevant leads across industries</div>
          <div className="btn-box">
            <PrimaryButton
              className="find-btn transparent-btn"
              buttonName="View Tenders & Quotations"
              btnRightIcon="../../static/assets/images/icons/icon-rt-arrow-dark.svg"
              onClick={() => Router.push("https://www.nexarc.in/tender-and-quotations//")}
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