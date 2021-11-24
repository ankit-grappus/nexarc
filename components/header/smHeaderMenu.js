import { useState } from "react";
import { myaccountMenu, myActivityMenu } from "./menuData"

import PrimaryButton from "../button";

function SmHeaderMenu() {
  return (
    <>
      <div className="user-block">
        <div className="user-info-box">
          <img className="user" src="../../static/assets/images/user.png" alt="user" width="37" height="37" />
          <div className="user-info">
            <div className="name">Tanisha Dubey</div>
            <div className="designation">Elite Window Factory</div>
          </div>
        </div>
        <img className="dropdown-icon" src="../../static/assets/images/icons/chevron-left.svg" alt="icon" width="12" height="12" />
      </div>
      <div className="myaccount-block">
        {myaccountMenu.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <div className="nav-link">
                <span>{item.menuTitle}</span>
                <img className="dropdown-icon" src="../../static/assets/images/icons/chevron-left.svg" alt="icon" width="12" height="12" />
              </div>
            </li>
          )
        })}
      </div>
      <div className="activity-block">
        <div className="menu-heading">My activitiy</div>
        {myActivityMenu.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <div className="nav-link">
                <span>{item.menuTitle}</span>
                <img className="dropdown-icon" src="../../static/assets/images/icons/chevron-left.svg" alt="icon" width="12" height="12" />
              </div>
            </li>
          )
        })}
      </div>
      <div className="logout-block">
        <PrimaryButton
          className="btn logout-btn"
          buttonName="Logout"
          btnRightIcon="../../static/assets/images/icons/icon-arrow-right.svg"
        />
      </div>
    </>
  )
}
export default SmHeaderMenu;