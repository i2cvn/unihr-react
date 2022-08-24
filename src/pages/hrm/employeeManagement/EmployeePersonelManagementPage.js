import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  Form,
  Table,
  Pagination
} from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft,
  FaPlus,
  FaTh,
  FaThList
} from "react-icons/fa";
import FatCowIcon from "../../../components/common/FatCowIcon";
import { CommonCRUDLayout } from "../../../components/common/crud/CommonCRUDLayout";
import { ListDisplayTypes } from "../../../components/common/list/ListDisplayTypes";
import { ListOrderTypes } from "../../../components/common/list/ListOrderTypes";

export function EmployeePersonelManagementPage({}) {
  console.log("EmployeePersonelManagementPage");
  return (
    <CommonCRUDLayout
      title={"Personel"}
      titleIcon={"reseller_account"}
      overviewPanel={<EmployeePersonelProfileOverview />}
      listPanel={<EmployeePersonelProfileSearchList />}
      // newPanel={<EmployeePersonelProfile />}
      detailPanel={<EmployeePersonelProfileOverview />}
      editPanel={<EmployeePersonelProfileEdit />}
      statisticPanel={<EmployeePersonelProfileStatistic />}
    />
  );
}
export function EmployeePersonelProfileOverview({}) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                Total Personel entries: <b>10</b>.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                Categories: <b>10</b>.
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Card>
              <Card.Body>
                Add custom dashboard here{" "}
                <Button>
                  <FaPlus />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export function EmployeePersonelProfileSearchList({}) {
  return (
    <>
      <Row>
        <Col>
          <EmployeePersonelProfileSearchBar />
        </Col>
      </Row>
      <Row>
        <Col md={2}>Order by</Col>
        <Col md={4}>
          <ListOrderTypes />
        </Col>
        <Col md={2}>Display by</Col>
        <Col md={4}>
          <ListDisplayTypes />
        </Col>
      </Row>
      <Row>
        <Col>
          <EmployeePersonelProfileTable />
        </Col>
      </Row>
    </>
  );
}
export function EmployeePersonelProfileSearchBar({}) {
  return (
    <Row>
      <Col>
        {" "}
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Search
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="input" placeholder="search" />
            </Col>
            <Col sm={2}>
              <Form.Control as="select">
                <option value="name">Name</option>
              </Form.Control>
            </Col>
            <Col sm={3}>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
export function EmployeePersonelProfileListGrid({}) {
  return <Card></Card>;
}
export function EmployeePersonelProfileTable({}) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}
export function EmployeePersonelProfileEdit({}) {
  return <Card></Card>;
}
export function EmployeePersonelProfileStatistic({}) {
  return <Card></Card>;
}
export function EmployeePersonelProfile({}) {
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
