// styles
import "./styles.scss";

import { companyRoutes, contactUs, legalRoutes, getSolutionsRoutes, findOpportunitiesRoutes, getSkilledRoutes, stayUpdatedRoutes, socialIcons } from "./footerRoute"

function Footer() {

  function currentYear() {
    var year = new Date();
    var newYear = year.getFullYear();
    return newYear;
  }

  return (
    <>
      <footer className="footer-container">
        <div className="container-fluid custom">
          <div className="footer-top--block">
            <h3 className="footer-description">nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes. It offers a range of trusted products, solutions and services to help businesses find new opportunities, get practical tips and expert advice, gain new skills and more.</h3>
            <div className="footer-route-box">
              <h2 className="route-heading">Company</h2>
              <ul className="route-ul">
                {companyRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <h2 className="route-heading">Legal Routes</h2>
              <ul className="route-ul">
                {legalRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <h2 className="route-heading">Contact Us</h2>
              <ul className="route-ul">
                {contactUs.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <img className="contactus-icon mr--10" src={route.contactUsIcon} alt={route.contactUsAlt} title={route.iconTitle} />
                    <a className="link" href={route.link} target="_blank">{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="footer-bottom--block">
            <div className="footer-route-box">
              <h2 className="route-heading">Find Opportunities</h2>
              <ul className="route-ul">
                {findOpportunitiesRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Get Financing</div>
              <ul className="route-ul">
                {getFinancingRoutes.map((route, index) => (
                  <li className="route-li" key={index}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <h2 className="route-heading">Get Solutions</h2>
              <ul className="route-ul">
                {getSolutionsRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Find Experts</div>
              <ul className="route-ul">
                {findExpertsRoutes.map((route, index) => (
                  <li className="route-li" key={index}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <h2 className="route-heading">Get Skilled</h2>
              <ul className="route-ul">
                {getSkilledRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <h2 className="route-heading">Stay Updated</h2>
              <ul className="route-ul">
                {stayUpdatedRoutes.map((route, index) => (
                  <li className="route-li" key={index} nx-click-event={route.nxClickEvent}>
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          <div className="copyright-box">
            <div className="copyright-top--block">
              <div className="footer-logo--block">
                <img className="logo" src="../../static/assets/images/logo-nexarc.svg" alt="nexarc logo" width="137" height="33" />
              </div>
              <div className="social-block">
                <ul className="social-connect-box">
                  {socialIcons.map((item) => {
                    return (
                      <li className="item">
                        <a href={item.link} className="link" target="_blank" nx-click-event={item.nxClickEvent}>
                          <img className="icon" src={item.socialSrc} alt={item.alt} />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="copyright-bottom--block">
              <div className="copyright-text">{`© ${currentYear()} Tata Business Hub Limited. All Rights Reserved`}</div>
              <div className="address-text">148, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai, Maharashtra 400001</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer