import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft
} from "react-icons/fa";
import FatCowIcon from "../../../components/common/FatCowIcon";
import { CommonCRUDLayout } from "../../../components/common/crud/CommonCRUDLayout";

export function EmployeeCompensationManagementPage({}) {
  console.log("EmployeeCompensationManagementPage");
  let { path, url } = useRouteMatch();
  // console.log({ path, url });
  return <CommonCRUDLayout title={"Compensation"} />;
}
