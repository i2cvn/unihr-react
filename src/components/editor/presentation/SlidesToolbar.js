import React from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

export function SlidesToolbar({
  createNewSlideInSlides,
  removeSlideFromSlides
}) {
  return (
    <>
      <Button
        size="sm"
        variant="default"
        onClick={(evt) => createNewSlideInSlides()}
      >
        <FaPlus />{" "}
      </Button>
      <Button
        size="sm"
        variant="default"
        onClick={(evt) => removeSlideFromSlides()}
      >
        <FaMinus />{" "}
      </Button>
    </>
  );
}
