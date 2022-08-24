import React from "react";
import { Button } from "react-bootstrap";
import { FaSortAlphaDown, FaList } from "react-icons/fa";

export function SlideViewToolbar({ setDisplayStyle, displayStyle }) {
  return (
    <div>
      <Button variant="default" title="Sort">
        <FaSortAlphaDown />
      </Button>
      <Button
        variant="default"
        title="Grid/List"
        onClick={(evt) => {
          if (displayStyle === "grid") {
            setDisplayStyle("list");
          } else if (displayStyle === "list") {
            setDisplayStyle("grid");
          } else {
          }
        }}
      >
        <FaList />
      </Button>
    </div>
  );
}
