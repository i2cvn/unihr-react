import React from "react";
import { Row, Col } from "react-bootstrap";
import { SlideRow } from "./SlideRow";

export function SlideRows({ slidesEntries, setSelectedSlide, selectedSlide }) {
  return (
    <div
      style={{
        overflow: "scroll",
        height: "500px"
      }}
    >
      <hr />
      <Row>
        {(slidesEntries || []).map((slide, index) => (
          <Col lg={12} key={index}>
            <div style={{ minHeight: "50px" }}>
              <SlideRow
                // item={item}
                slide={slide}
                index={index}
                setSelectedSlide={setSelectedSlide}
                selectedSlide={selectedSlide}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
