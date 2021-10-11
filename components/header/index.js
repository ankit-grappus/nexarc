import { useState } from "react";
import Router from 'next/router'
import Link from 'next/link'

// styles
import "./styles.scss"

import PrimaryButton from "../button";
import HeaderMenu from "./headerMenu";
import { searchItems } from "./menuData";

function Header() {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);

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
              <Link href="/">
                <img className="logo" src="../../static/assets/images/logo-nexarc.svg" alt="nexarc logo" width="137" height="33" />
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
              <ul className="navbar-nav mr-auto">
                <HeaderMenu />
              </ul>

              <div className="nav-right fx fx--ai-c">
                <PrimaryButton
                  className="login-btn btn-sm ml--10"
                  buttonName="Login"
                  onClick={() => Router.push("https://www.nexarc.in/login//")}
                />
                <PrimaryButton
                  className="primary btn-sm register-btn ml--10 mr--10"
                  buttonName="Register Now"
                  onClick={() => Router.push("https://www.nexarc.in/sign-up//")}
                />
                <img className="logo" src="../../static/assets/images/logo-tata.svg" alt="tata logo" width="32" height="30" />
              </div>
            </div>

            <div className="search-main-box" onClick={() => expandSearch()}>
              <div className="search-box">
                <img className="search-icon" src="../../static/assets/images/icons/icon-search-dark.svg" alt="search icon" width="14" height="14" />
              </div>
            </div>
            {expand &&
              <div class="search-content-box" id="search-content-box">
                <input class="search-input" type="text" placeholder="Type here to search" />
                <div class="search-content">
                  <h3 class="search-title">You might be interested in</h3>
                  <div class="column-content">
                    <div class="left-column">
                      {searchItems.map((item) => {
                        return (
                          <a class="search-item" href={item.link}>
                            <div class="title">{item.title}</div>
                            <div class="label">{item.label}</div>
                          </a>
                        )
                      })}
                    </div>
                    <div class="right-column">
                      <a class="browseAll" href="https://www.nexarc.in/all-list/">Browse All</a>
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