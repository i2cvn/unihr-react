import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft
} from "react-icons/fa";
import BasicLayout from "../components/layout/BasicLayout";
import { mainMenuObj } from "../config/menuConfig";
import FatCowIcon from "../components/common/FatCowIcon";
import { UserStatusIndicator } from "../components/user/UserStatusIndicator";

export default function CommonManagementPage({ title, subPageName, children }) {
  const [closed, setClosed] = useState(false);
  return (
    <BasicLayout
      sideMenuFooter={<UserStatusIndicator />}
      closed={closed}
      setClosed={setClosed}
    >
      <Container className="p-3">
        {subPageName && (
          <>
            <Row>
              <Col md={3}>
                <Link to="/">
                  <Button>
                    <FaChevronLeft /> Back
                  </Button>
                </Link>
              </Col>
              <Col md={4}>
                <div className="h3">{title}</div>
              </Col>
              <Col md={5}>
                <Dropdown className="float-right">
                  <Dropdown.Toggle variant="success" id="dropdown-goto">
                    Go to
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {Object.values(mainMenuObj.menu)
                      .find((m) => m.name === subPageName)
                      .children.map((item) => (
                        <Dropdown.Item as={Link} to={item.link}>
                          <FatCowIcon iconName={item.icon} />{" "}
                          {item.title || item.text}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <hr />
          </>
        )}
        {children}
      </Container>
    </BasicLayout>
  );
}
