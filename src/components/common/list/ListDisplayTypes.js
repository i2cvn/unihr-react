import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  Form
} from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft,
  FaTh,
  FaThList
} from "react-icons/fa";

export function ListDisplayTypes({}) {
  return (
    <Row>
      <Col md={3}>
        <Form.Control as="select">
          <option value="5">5</option>
          <option value="10">10</option>
        </Form.Control>
      </Col>
      <Col md={9}>
        <ButtonGroup>
          <Button size="sm" variant="secondary">
            <FaThList />
          </Button>
          <Button size="sm" variant="secondary">
            <FaTh />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}
