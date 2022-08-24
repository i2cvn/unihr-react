import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  TabContainer
} from "react-bootstrap";
import {} from "react-icons/fa";
import BasicLayout from "../../components/layout/BasicLayout";
import FatCowIcon from "../../components/common/FatCowIcon";
import CommonManagementPage from "../CommonManagementPage";
import { EmployeeCompensationManagementPage } from "./employeeManagement/EmployeeCompensationManagementPage";
import { EmployeePersonelManagementPage } from "./employeeManagement/EmployeePersonelManagementPage";

export default function EmployeeManagementMainPage({}) {
  let { path, url } = useRouteMatch();
  console.log({ path, url });
  return (
    <CommonManagementPage title="Employee Management" subPageName="employee">
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route
                path={`${path}/personel`}
                exact
                component={EmployeePersonelManagementPage}
              />
              <Route
                path={`${path}/compensation`}
                exact
                component={EmployeeCompensationManagementPage}
              />
              <Route path="/" exact>
                <div>Please select a page.</div>
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </CommonManagementPage>
  );
}
