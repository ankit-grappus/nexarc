import { useEffect, useState } from "react";
import Router from 'next/router'
import Link from 'next/link'

// styles
import "./styles.scss"

import PrimaryButton from "../button";
import HeaderMenu from "./headerMenu";
import SmHeaderMenu from "./smHeaderMenu";
import { searchItems } from "./menuData";

function Header() {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 767) {
        setMobileMenu(true)
      }
    }
  }, [])

  function toggleShow() {
    setShow(!show)
  }
  function expandSearch() {
    setExpand(!expand)
  }

  return (
    <>
      <header className="header-container">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand">
              <Link href="/" nx-click-event="NXA_HM_HEAD_NEXARCICON">
                <img className="logo" src="../../static/assets/images/logo-nexarc.svg" alt="nexarc logo" width="137" height="33" nx-click-event="NXA_HM_HEAD_NEXARCICON" />
              </Link>
            </div>
            <button
              className={`navbar-toggler ${show ? "show" : ""}`}
              onClick={toggleShow}
              aria-label="Justify"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${show ? "show" : ""}`}>
              {!mobileMenu &&
                <ul className="navbar-nav mr-auto">
                  <HeaderMenu />
                </ul>
              }
              {mobileMenu &&
                <ul className="navbar-nav mr-auto sm-menu">
                  <SmHeaderMenu />
                </ul>
              }
              {!mobileMenu &&
                <div className="nav-right fx fx--ai-c">
                  <div>
                    <PrimaryButton
                      className="login-btn btn-sm ml--10"
                      buttonName="Login"
                      onClick={() => Router.push("https://www.nexarc.in/login//")}
                      nxClickEvent="NXA_HM_HEAD_LOGIN"
                    />
                  </div>
                  <div>
                    <PrimaryButton
                      className="primary btn-sm register-btn ml--10 mr--10"
                      buttonName="Register Now"
                      onClick={() => Router.push("https://www.nexarc.in/sign-up//")}
                      nxClickEvent="NXA_HM_HEAD_REGISTER"
                    />
                  </div>

                  <img className="logo" src="../../static/assets/images/logo-tata.svg" alt="tata logo" width="32" height="30" />
                </div>
              }
            </div>

            <div className="search-main-box" onClick={() => expandSearch()} nx-click-event="NXA_HM_SEARCH">
              <div className="search-box">
                <img className="search-icon" src="../../static/assets/images/icons/icon-search-dark.svg" alt="search icon" width="14" height="14" />
              </div>
            </div>
            {expand &&
              <div className="search-content-box" id="search-content-box">
                <input className="search-input" type="text" placeholder="Type here to search" />
                <div className="search-content">
                  <h3 className="search-title">You might be interested in</h3>
                  <div className="column-content">
                    <div className="left-column">
                      {searchItems.map((item) => {
                        return (
                          <a className="search-item" href={item.link}>
                            <div className="title">{item.title}</div>
                            <div className="label">{item.label}</div>
                          </a>
                        )
                      })}
                    </div>
                    <div className="right-column">
                      <a className="browseAll" href="https://www.nexarc.in/all-list/">Browse All</a>
                    </div>
                  </div>
                </div>
              </div>
            }
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header;