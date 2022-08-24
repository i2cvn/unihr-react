import React from "react";
import { Button } from "react-bootstrap";

export function ServiceCard({ serviceData }) {
  return (
    <>
      <h2>{serviceData.title}</h2>
      <p>{serviceData.description}</p>
      <img src={serviceData.imgUrl} />
      <p>
        <Button variant="primary" size="lg">
          View details &raquo;
        </Button>
      </p>
    </>
  );
}
