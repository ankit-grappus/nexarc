import { useState } from "react";
// styles
import "./styles.scss"

function InfoTrending() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return(
    <div className="BottomContent">
        <div className="top">
            <div className="topHeading">Top trending in Business guides</div>
            <div className="topSubHeading">Practical tips & ideas to solve daily challenges</div>
        </div>
        <div className="imageSec">
            <div className="imageContent">
                <img className="bottomImage" src="../../static/assets/images/growBusiness.png" alt="nexarc logo" width="137" height="33" />
                <p className="bottomText">Grow your business</p>
            </div>
            <div className="imageContent">
                <img className="bottomImage" src="../../static/assets/images/chess.png" alt="nexarc logo" width="137" height="33" />
                <p className="bottomText">Manage Finance</p>
            </div>
            <div className="imageContent">
                <img className="bottomImage" src="../../static/assets/images/flag.png" alt="nexarc logo" width="137" height="33" />
                <p className="bottomText">Use government schemes</p>
            </div>
        </div>
        <div className="exploreMore">
            <button type="button" className="btn">Explore More</button>
            <img className="logo" src="../../static/assets/images/arrowRight.png" alt="arrow logo" width="137" height="33" />
        </div>
        <div className="topTrending">
            <h2 className="popularTopicHeading">Popular topics</h2>
            <img className="popularTopic" src="../../static/assets/images/popularTopic1.png" alt="arrow logo" width="137" height="33" />
            <img className="popularTopic" src="../../static/assets/images/popularTopic2.png" alt="arrow logo" width="137" height="33" />
            <div className="popularButton">
               <button className="popularTopicButton">Custom</button>
                <button className="popularTopicButton">GST & compliance</button>
                <button className="popularTopicButton">Custom</button> 
            </div>
            <div className="popularButton">
               <button className="popularTopicButton">Manage Finances</button>
                <button className="popularTopicButton">GST</button>
                <button className="popularTopicButton">data</button> 
            </div>
            <div className="popularButton">
               <button className="popularTopicButton">Manage</button>
                <button className="popularTopicButton">Technology</button>
                <button className="popularTopicButton">Custom</button> 
            </div>
        </div>
    </div>
  )
}
export default InfoTrending;