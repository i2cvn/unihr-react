import React from "react";

import { Container, Toast, Jumbotron, Carousel, Fade } from "react-bootstrap";
import BasicLayout from "../components/layout/BasicLayout";
import ImageSlider from "../components/common/ImageSlider";
import { mockImages, mockServices } from "../data/landing/mockDataLanding";
import { FaBackspace, FaBackward, FaUser } from "react-icons/fa";
import "./WelcomePage.css";
import { ManagementMainMenu } from "./ManagementMainMenu";
import CommonManagementPage from "./CommonManagementPage";
// import { ServicesGrid } from "./components/landing/services/ServicesGrid";

//=============================================
export default function WelcomePage({}) {
  return (
    <CommonManagementPage>
      <ManagementMainMenu
        jumbo={
          <Jumbotron>
            <h1 className="header">Welcome To UniHR</h1>
            <h4>Your power force</h4>
          </Jumbotron>
        }
      />

      <hr />
      {/* <Container>
        <ImageSlider images={mockImages} />
      </Container>
      <hr /> */}
    </CommonManagementPage>
  );
}
