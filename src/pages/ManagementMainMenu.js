import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FatCowIcon from "../components/common/FatCowIcon";
import { mainMenuObj } from "../config/menuConfig";

export function ManagementMainMenu({ jumbo }) {
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const [currentSubMenuName, setCurrentSubMenuName] = useState(null);
  const closeSubMenu = () => {
    setCurrentSubMenuName(null);
    setCurrentSubMenu(null);
  };
  const openSubMenu = (menuName) => {
    setCurrentSubMenuName(menuName);
    setCurrentSubMenu(mainMenuObj.menu.find((m) => m.name == menuName));
  };
  const isSubMenuSelected = (menuItem) => {
    return currentSubMenu === menuItem.name;
  };
  const getMenuDisplayStyle = (menuItem) => {
    if (
      !currentSubMenuName ||
      (menuItem && menuItem.name == currentSubMenuName)
    ) {
      return "btn-primary";
    } else {
      return "btn-secondary";
    }
  };
  return (
    <Container className="p-3">
      {currentSubMenu ? (
        <div>
          <Button onClick={(evt) => closeSubMenu()}>
            <FaChevronLeft /> Back
          </Button>
          <hr />
        </div>
      ) : (
        jumbo
      )}
      <Row>
        {mainMenuObj.menu.map((menuItem, index) => (
          <Col lg={3} key={menuItem.name}>
            <Button
              className={"btn-slg " + getMenuDisplayStyle(menuItem)}
              onClick={(evt) => openSubMenu(menuItem.name)}
            >
              <FatCowIcon iconName={menuItem.icon} />
              <h5>{menuItem.text}</h5>
            </Button>
            <div
              style={{
                textAlign: "center",
                fontSize: "40px"
                // padding: "-20px",
                // margin: "-20px"
              }}
            >
              {menuItem.name === currentSubMenuName && <FaCaretDown />}
            </div>
          </Col>
        ))}
      </Row>
      <hr />
      <div>
        <Row>
          {currentSubMenu &&
            (currentSubMenu.children || []).map((menuItem, index) => (
              <>
                <Col lg={3} style={{ paddingBottom: "16px" }}>
                  <Link
                    to={"hrm" + "/" + currentSubMenu.name + "/" + menuItem.link}
                  >
                    <Button variant="default" className={"btn-slg"}>
                      <FatCowIcon iconName={menuItem.icon} />
                      <h5>{menuItem.text}</h5>
                    </Button>
                  </Link>
                </Col>
              </>
            ))}
        </Row>
      </div>
    </Container>
  );
}
