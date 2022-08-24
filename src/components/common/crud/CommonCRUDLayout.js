import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  Tabs,
  Tab
} from "react-bootstrap";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaChevronLeft
} from "react-icons/fa";
import FatCowIcon from "../FatCowIcon";
import "./CommonCRUDLayout.scss";

export function CommonCRUDLayout({
  title,
  titleIcon,
  overviewPanel,
  listPanel,
  newPanel,
  detailPanel,
  editPanel,
  statisticPanel,
  more
}) {
  return (
    <div className="common-crud-container">
      <h3>
        <FatCowIcon iconName={titleIcon} /> {title}
      </h3>
      <Tabs defaultActiveKey="Overview" id="tab" className="mb-3">
        <Tab eventKey="Overview" title="Overview">
          {overviewPanel}
        </Tab>
        <Tab eventKey="List" title="List">
          {listPanel}
        </Tab>
        <Tab eventKey="New" title="New">
          {newPanel}
        </Tab>
        <Tab eventKey="Detail" title="Detail">
          {detailPanel}
        </Tab>
        <Tab eventKey="Edit" title="Edit">
          {editPanel}
        </Tab>
        <Tab eventKey="Statistic" title="Statistic">
          {statisticPanel}
        </Tab>
      </Tabs>
    </div>
  );
}
