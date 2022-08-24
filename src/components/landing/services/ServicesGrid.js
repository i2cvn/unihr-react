import React from "react";
import { Row, Col } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ servicesData }) {
  return (
    <Row>
      {(servicesData || []).map((serviceData) => (
        <Col key={serviceData.title} xs={12} md={12} lg={4}>
          <ServiceCard serviceData={serviceData} />
        </Col>
      ))}
    </Row>
  );
}
