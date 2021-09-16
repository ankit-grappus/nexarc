// styles
import "./styles.scss";

import { companyRoutes, legalRoutes, getSolutionsRoutes, getFinancingRoutes, findOpportunitiesRoutes, findExpertsRoutes, getSkilledRoutes, stayUpdatedRoutes } from "./footerRoute"

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
          <div className="footer-logo--block">
            <img className="logo" src="../../static/assets/images/logo-nexarc.svg" alt="nexarc logo" width="137" height="33" />
          </div>
          <div className="footer-top--block">
            <div className="footer-description">nexarc (a Tata enterprise) is a digital growth platform that enables emerging businesses to grow, solve challenges and optimize processes. It offers a range of trusted products, solutions and services to help businesses find new opportunities, get practical tips and expert advice, gain new skills and more.</div>
            <div className="footer-route-box">
              <div className="route-heading">Company</div>
              <ul className="route-ul">
                {companyRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Legal Routes</div>
              <ul className="route-ul">
                {legalRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom--block">
            <div className="footer-route-box">
              <div className="route-heading">Find Opportunities</div>
              <ul className="route-ul">
                {findOpportunitiesRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Get Financing</div>
              <ul className="route-ul">
                {getFinancingRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Get Solutions</div>
              <ul className="route-ul">
                {getSolutionsRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Find Experts</div>
              <ul className="route-ul">
                {findExpertsRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Get Skilled</div>
              <ul className="route-ul">
                {getSkilledRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-route-box">
              <div className="route-heading">Stay Updated</div>
              <ul className="route-ul">
                {stayUpdatedRoutes.map((route, index) => (
                  <li className="route-li">
                    <a className="link" href={route.link}>{route.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copyright-text">{`© ${currentYear()} Rights reserved by nexarc`}</div>
        </div>
      </footer>
    </>
  )
}
export default Footer