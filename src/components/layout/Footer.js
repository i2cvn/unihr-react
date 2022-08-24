import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";

import "./Footer.scss";

import appConfig from "../../config/appConfig";

export default function MyFooter({}) {
  return (
    <Container>
      <Row className="my-footer">
        <Col>
          {appConfig.name} - {appConfig.author}
        </Col>
      </Row>
    </Container>
  );
}
