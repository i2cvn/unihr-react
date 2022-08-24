import React, { Component, useState } from "react";
import "./SideBar.scss";
import FatCowIcon from "../common/FatCowIcon";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
/*
export function SideBarMenuGroup({ group }) {
  return (

  );
}
*/
export function HeaderMenu({ title }) {
  return (
    <li className="header-menu">
      <span>{title}</span>
    </li>
  );
}
export function SideBar({ title, menu, footer, closed, setClosed }) {
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="sidebar-brand">
          <Link to="/">{title}</Link>
          <CloseSidebar closed={closed} setClosed={setClosed} />
          <ShowSideBar closed={closed} setClosed={setClosed} />
        </div>

        <div className="sidebar-menu">
          <ul>
            {Object.values(menu).map((group) => (
              <SideBarDropdown key={group.name} dropDownMenu={group} />
            ))}
          </ul>
        </div>
      </div>
      {footer && <SideBarFooter>{footer}</SideBarFooter>}
    </nav>
  );
}

export function ShowSideBar({ closed, setClosed }) {
  return (
    <div
      className="btn btn-sm btn-dark show-sidebar"
      onClick={(evt) => setClosed(false)}
    >
      <i className="fas fa-bars"></i>
    </div>
  );
}

export function CloseSidebar({ closed, setClosed }) {
  return (
    <div className="close-sidebar" onClick={(evt) => setClosed(true)}>
      <i className="fas fa-times" />
    </div>
  );
}

export function SideBarDropdown({ dropDownMenu, title, faIconName, badge }) {
  const [open, setOpen] = useState(false);
  // console.log(dropDownMenu);
  return (
    <li className="sidebar-dropdown">
      <a onClick={() => setOpen(!open)}>
        {faIconName && <i className={"fa " + faIconName} />}
        {dropDownMenu.icon && (
          <FatCowIcon iconName={dropDownMenu.icon} width="16px" height="16px" />
        )}{" "}
        <span>{title || dropDownMenu.text || dropDownMenu.name}</span>
        {badge && (
          <span className="badge badge-pill badge-warning">{badge}</span>
        )}
      </a>
      <SideBarSubMenu open={open} setOpen={setOpen} menu={dropDownMenu} />
    </li>
  );
}
export function SideBarSubMenu({ open, menu = {}, badge, badgeType }) {
  // console.log(menu);
  return (
    <div className="sidebar-submenu">
      <Collapse in={open}>
        <ul>
          {(menu.children || []).map((subMenuItem) => (
            <li key={subMenuItem.name}>
              <Link to={`/hrm/${menu.name}/${subMenuItem.link}`}>
                {subMenuItem.faIconName && (
                  <i className={"fa " + subMenuItem.faIconName} />
                )}
                {subMenuItem.icon && (
                  <FatCowIcon
                    iconName={subMenuItem.icon}
                    width="16px"
                    height="16px"
                  />
                )}{" "}
                <span>{subMenuItem.text || subMenuItem.name}</span>
                {badge && badgeType && (
                  <span className={"badge badge-pill" + " " + badgeType}>
                    {badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}

export function SideBarHeader() {
  return (
    <>
      <div className="sidebar-header"></div>
      {/* sidebar-header  */}
      <div className="sidebar-search">
        <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control search-menu"
              placeholder="Search..."
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar-search  */}
    </>
  );
}

export function SideBarFooter({ children }) {
  return <div>{children}</div>;
}
