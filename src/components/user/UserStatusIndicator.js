import React, { Component, useState } from "react";
import FatCowIcon from "../common/FatCowIcon";
import "./UserStatusIndicator.scss";

export function UserStatusIndicator({}) {
  return (
    <div className="sidebar-footer">
      <a href="#">
        <i className="fa fa-bell" />
        <span className="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i className="fa fa-envelope" />
        <span className="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i className="fa fa-cog" />
        <span className="badge-sonar" />
      </a>
      <a href="#">
        <i className="fa fa-power-off" />
      </a>
    </div>
  );
}
