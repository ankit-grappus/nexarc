// styles
import { Button } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./styles.scss";

function InfoHubSec() {
  return (
    <>
    <Header />
        <div className="banner">
            <h2 className="bannerHeading">Info Hub</h2>
            <h5 className="bannerSub">Your trusted source of relevant information</h5>
            <img className="bannerImg" src="../../static/assets/images/banner.png" alt="nexarc logo" width="137" height="33" />
            <img className="bannerContent" src="../../static/assets/images/bannerContent.png" alt="nexarc logo" width="137" height="33" />
            <img className="bannerContentMobile" src="../../static/assets/images/mobBanner.png" alt="nexarc logo" width="137" height="33" />

        </div>

        {/* Content Section */}
        <div className="mainSec">
            <li id="search">
                <form id="searchForm" action="" method="get">
                    <input type="text" name="search_text" id="search_text" placeholder="Select your area of interest"/>
                    <img className="logoBtn" src="../../static/assets/images/arrowDown.png" alt="nexarc logo" width="137" height="33" />
                </form>
            </li>
            <div className="content_heading">
                <h2>Latest News and updates</h2>
                <h5 className="content_subHeading">Business news & updates from your sector - delivered to you.</h5>
            </div>
            <div className="content">
                <div className="content_logo">
                    <img className="logo" src="../../static/assets/images/frame1.png" alt="nexarc logo" width="137" height="33" />
                    <p className="logo_content">Update about your industry</p>
                </div>
                <div className="content_logo">
                    <img className="logo" src="../../static/assets/images/frame1.png" alt="nexarc logo" width="137" height="33" />
                    <p className="logo_content">Government policies & regulations</p>
                </div>
                <div className="content_logo">
                    <img className="logo" src="../../static/assets/images/frame1.png" alt="nexarc logo" width="137" height="33" />
                    <p className="logo_content">GST & compliance</p>
                </div>
            </div>
            <div className="exploreMore">
                <button type="button" className="btn">Explore More</button>
                <img className="logo" src="../../static/assets/images/arrowRight.png" alt="arrow logo" width="137" height="33" />
            </div>
        </div>
        

        {/* Bottom Content */}
        <div className="BottomContent">
            <div className="topTrending">
                <h2>Top trending in Business guides</h2>
                <h5 className="topTrendingSubHeading">Practical tips & ideas to solve daily challenges</h5>
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
            </div>
            <div className="bitmap">
                <div className="advisorSec">
                    <h2 className="textHeading">nexarc Advisors</h2>
                    <p className="subHeading">Expert advice at your fingertips</p>
                </div>
                
                <img className="bitmapImg" src="../../static/assets/images/bitmap.png" alt="arrow logo" width="137" height="33" />
                <div>
                    <div class="left"></div>
                    <img className="bitmapHuman" src="../../static/assets/images/bitmapHuman.png" alt="arrow logo" width="137" height="33" />
                </div>
                <div className="KnowMore">
                    <button type="button" className="btn">Know More</button>
                    <img className="logo" src="../../static/assets/images/arrowR.png" alt="arrow logo" width="137" height="33" />
                </div>
            </div>
        </div>
    <Footer />
    </>
  )
}
export default InfoHubSec;