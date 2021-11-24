import { useState } from "react";
import Link from 'next/link';
import { menuItem } from "./menuData"

function HeaderMenu() {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [dropdownItem, setDropdownItem] = useState(null);

  function showMenuDropdown(index) {
    setMenuDropdown(true)
    setDropdownItem(index)
  }
  function hideMenuDropdown(index) {
    setMenuDropdown(false)
    setDropdownItem(index)
  }
  // function fixedLayerCloseMenu() {
  //   setMenuDropdown(false)
  //   setDropdownItem(null)
  // }

  return (
    <>
      {menuItem.map((item, index) => {
        return (
          <>
            <li className="nav-item" key={index}
              onMouseEnter={() => showMenuDropdown(index)}
              onMouseLeave={() => hideMenuDropdown(index)}
            >
              {!item.link &&
                <>
                  <div className="nav-link">
                    {item.menuTitle}
                    <img className={`dropdown-icon ${menuDropdown && index === dropdownItem ? "rotate" : ""}`} src="../../static/assets/images/icons/chevron-left.svg" alt="icon" width="12" height="12" nx-click-event={item.eventClickHeader}/>
                  </div>
                  {menuDropdown && index === dropdownItem &&
                    <>
                      {/* <div className="menu-fixed-layer" onClick={fixedLayerCloseMenu}></div> */}
                      <div className="submenu">
                        {item.submenu.map((menuItem, index) => {
                          return (
                            <a key={index} className="submenu-link" href={menuItem.submenuLink} nx-click-event={menuItem.eventClickName}>{menuItem.title}</a>
                          )
                        })}
                      </div>
                    </>
                  }
                </>
              }
              {item.link &&
                <a className="nav-link" href={item.link}>{item.menuTitle}</a>
              }
            </li>
          </>
        )
      })}

    </>
  )
}
export default HeaderMenu;