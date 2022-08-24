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
  FaSortAmountDown,
  FaSortAmountUp,
  FaTh,
  FaThList
} from "react-icons/fa";

export function ListOrderTypes({}) {
  return (
    <Row>
      <Col>
        <Form.Control as="select">
          <option value="name">Name</option>
          <option value="createdDate">Created date</option>
        </Form.Control>
      </Col>
      <Col>
        <ButtonGroup className="float-left">
          <Button size="sm" variant="secondary">
            <FaSortAmountDown />
          </Button>
          <Button size="sm" variant="secondary">
            <FaSortAmountUp />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}
