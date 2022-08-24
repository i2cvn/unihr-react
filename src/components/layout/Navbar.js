import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import appConfig from "../../config/appConfig";
import "./Navbar.scss";

export default function MyNavbar({ user }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">
            <img src={appConfig.logo} height="40px" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Uni" id="uni-nav-dropdown">
              <NavDropdown.Item href="https://unibi.dev.i2cw.com">
                UniBi
              </NavDropdown.Item>
              <NavDropdown.Item>UniFront</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://unihr.dev.i2cw.com">
                UniHR
              </NavDropdown.Item>
              <NavDropdown.Item href={appConfig.links.unidocs}>
                UniDocs
              </NavDropdown.Item>
              <NavDropdown.Item>UniTeam</NavDropdown.Item>
              <NavDropdown.Item>UniFi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tools">Tools</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/help">Help</Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/userProfile"></Link>
            </Nav.Link>
            <NavDropdown
              alignRight
              title={
                <>
                  <Image
                    src={`https://via.placeholder.com/40x40?text=user`}
                    roundedCircle
                  />{" "}
                  Login
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Image
                  src={`https://via.placeholder.com/40x40?text=user`}
                  roundedCircle
                />
              </NavDropdown.Item>
              <NavDropdown.Item>User</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
