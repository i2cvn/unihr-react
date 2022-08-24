import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import {} from "react-icons/fa";
import BasicLayout from "../../components/layout/BasicLayout";
import FatCowIcon from "../../components/common/FatCowIcon";
import { UserStatusIndicator } from "../../components/user/UserStatusIndicator";
import CommonManagementPage from "../CommonManagementPage";
// import PresentationEditor from "../../components/editor/presentation/PresentationEditor";

export default function ExpenseManagementPage({}) {
  let { path, url } = useRouteMatch();
  return (
    <CommonManagementPage title="Expense Management" subPageName="expense" />
  );
}
