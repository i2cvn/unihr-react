import React, { Component, useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "./BasicLayout.scss";

import MyNavbar from "./Navbar";
import Footer from "./Footer";
import { SideBar } from "./SideBar";
import { mainMenuObj } from "../../config/menuConfig";

export default function BasicLayout({
  children,
  sideMenu = mainMenuObj,
  sideMenuFooter,
  closed,
  setClosed
}) {
  return (
    <>
      <MyNavbar />
      <div
        className={"page-wrapper chiller-theme" + (!closed ? " toggled" : "")}
      >
        {sideMenu && (
          <SideBar
            title="Main menu"
            menu={sideMenu.menu}
            closed={closed}
            setClosed={setClosed}
            footer={sideMenuFooter}
          />
        )}
        <div className={"page-content"}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
