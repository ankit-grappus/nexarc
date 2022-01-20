import { useState } from "react";
// styles
import "./styles.scss"
function InfohubBitmap(){
    return(
        <div className="bitmap">
            <div className="bitLeftSide">
                <div className="advisorSec">
                    <h2 className="textHeading">nexarc Advisors</h2>
                    <p className="subHeading">Expert advice at your fingertips</p>
                </div>
                {/* <div className="advivorSecText">
                    <imp className="advivorSecTextImg" src="../../static/images/fi_check-circle.png" alt="text" />
                </div> */}
                <div className="curatedList">
                    <div className="curatedListSec">
                        <img className="curatedImg" src="../../static/assets/images/fi_check-circle.png" alt="text" />
                        <p className="curatedText">Curated list of business advisors and subject matter experts</p>
                    </div>
                    <div className="curatedListSec">
                        <img className="curatedImg" src="../../static/assets/images/fi_check-circle.png" alt="text" />
                        <p className="curatedText">Curated list of business advisors and subject matter experts</p>
                    </div>
                </div>
                {/* <img className="bitmapImg" src="../../static/assets/images/bitmap.png" alt="arrow logo" width="137" height="33" /> */}
                
                <div className="KnowMore">
                    <button type="button" className="btn">Know More</button>
                    <img className="logo" src="../../static/assets/images/arrowR.png" alt="arrow logo" width="137" height="33" />
                </div>
            </div>
                
                <div className="bitRightSide">
                    <div className="left"></div>
                    <img className="bitmapHuman" src="../../static/assets/images/bitmapHuman.png" alt="arrow logo" width="137" height="33" />
                </div>
        </div>
    )
}
export default InfohubBitmap