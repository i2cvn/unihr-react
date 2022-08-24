import React, { useState } from "react";

import { Button, Container, Toast, Jumbotron } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import "./styles/chiller-theme.scss";
// import WelcomePage from "./pages/WelcomePage";
import appConfig from "./config/appConfig";
import WelcomePage from "./pages/WelcomePage";
import EmployeeManagementMainPage from "./pages/hrm/EmployeeManagementMainPage";
import UserMainPage from "./pages/UserMainPage";
import PlanningManagementPage from "./pages/hrm/PlanningManagementPage";
import ExpenseManagementPage from "./pages/hrm/ExpenseManagementPage";
import OrganizationManagementPage from "./pages/hrm/OrganizationManagementPage";

const App = () => (
  <>
    <Helmet>
      <title>
        {appConfig.title} - {appConfig.slogan}
      </title>
    </Helmet>
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/myAccount" exact component={UserMainPage} />
        <Route path="/hrm/employee" component={EmployeeManagementMainPage} />
        <Route path="/hrm/planning" component={PlanningManagementPage} />
        <Route path="/hrm/expense" component={ExpenseManagementPage} />
        <Route
          path="/hrm/organization"
          component={OrganizationManagementPage}
        />
      </Switch>
    </Router>
  </>
);

export default App;
