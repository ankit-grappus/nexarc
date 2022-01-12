// styles
import { Button } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InfoTrending from "../../components/infoTrending";
import InfohubBitmap from "../../components/infohubBitmap";
import "./styles.scss";

function InfoHubSec() {
  return (
    <div className="info-container">
    <Header />
        <div className="banner">
            <h2 className="bannerHeading">Info Hub</h2>
            <h5 className="bannerSub">Your trusted source of relevant information</h5>
            <div className="banner_background">
                <img className="bannerImg" src="../../static/assets/images/human_1.png" alt="nexarc logo" width="137" height="33" />
                <img className="bannerImg1" src="../../static/assets/images/human_2.png" alt="nexarc logo" width="137" height="33" />
                <img className="bannerImg2" src="../../static/assets/images/arc.png" alt="nexarc logo" width="137" height="33" />
            </div>
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
                <h2 className="cont_heading">Latest News and updates</h2>
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
        <InfoTrending />
        <InfohubBitmap />
        <Footer />  
    
    </div>
  )
}
export default InfoHubSec;