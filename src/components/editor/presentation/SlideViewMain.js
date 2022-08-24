import React, { useState } from "react";

export function SlideViewMain({}) {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <div
      style={{
        overflow: "scroll",
        height: "500px",
        minHeight: "500px"
      }}
    >
      <div
        style={{
          border: "1px solid #777",
          height: "500px",
          minHeight: "500px",
          padding: "40px"
        }}
      >
        <h4>Slide 1 / Content</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}
