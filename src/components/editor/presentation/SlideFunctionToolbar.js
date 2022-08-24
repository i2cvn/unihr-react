import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FaFile } from "react-icons/fa";

export function SlideFunctionToolbar({}) {
  return (
    <div>
      <DropdownButton id="dropdown-new-button" title="New">
        <Dropdown.Item href="#">
          <FaFile /> Slide
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
