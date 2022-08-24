import React, { useState, useEffect } from "react";

import {
  Container,
  Toast,
  Jumbotron,
  Carousel,
  Row,
  Col,
  Breadcrumb,
  Tab,
  Tabs,
  Badge,
  Button
} from "react-bootstrap";

import {
  createNewSlideInSlides,
  removeSlideFromSlides
} from "../../../data/editor/slidesHooks";
import { SlideRows } from "./SlideRows";
import { SlideViewMain } from "./SlideViewMain";
import { SlideViewToolbar } from "./SlideViewToolbar";
import { SlidesToolbar } from "./SlidesToolbar";
import { SlideInfo } from "./SlideInfo";
import { slidesContent } from "./slideData";
import { SlideFunctionToolbar } from "./SlideFunctionToolbar";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

function SlideItemList({}) {
  return <div>List</div>;
}
export default function PresentationEditor({}) {
  const [selectedSlide, setSelectedSlide] = useState();
  const [displayStyle, setDisplayStyle] = useState("grid");
  const [slidesEntries, setSlidesEntries] = useState(
    slidesContent.entries || []
  );
  const createNewSlideInSlidesBound = () =>
    createNewSlideInSlides({ slidesEntries, setSlidesEntries });
  const removeSlideFromSlidesBound = () =>
    removeSlideFromSlides({ selectedSlide, slidesEntries, setSlidesEntries });
  useEffect(() => {
    createNewSlideInSlidesBound();
  }, []);
  return (
    <Container fluid className="p-3">
      <div className="d-flex">
        <div className="mr-auto">
          <SlideFunctionToolbar />
        </div>
        <div className="">
          <Link to={"/folders"}>
            <Button>
              <FaWindowClose />
            </Button>
          </Link>
        </div>
      </div>
      <hr />
      <Row>
        <Col lg={2} style={{ height: "600px", backgroundColor: "#eee" }}>
          <div style={{ height: "90%", backgroundColor: "#eee" }}>
            <Row>
              <Col>
                <h5>
                  Slides <Badge>{slidesEntries.length}</Badge>
                </h5>
              </Col>
              <Col>
                <SlidesToolbar
                  createNewSlideInSlides={createNewSlideInSlidesBound}
                  setSlidesEntries={setSlidesEntries}
                  removeSlideFromSlides={removeSlideFromSlidesBound}
                />
              </Col>
            </Row>
            <div>
              <SlideRows
                slidesEntries={slidesEntries}
                setSelectedSlide={setSelectedSlide}
                selectedSlide={selectedSlide}
                setSlidesEntries={setSlidesEntries}
              />
            </div>
          </div>
          {/* <div style={{ height: "40%", backgroundColor: "#eee" }}>
              <div>
                <h5>Preview</h5>
              </div>
              <div>
                <SlideItemPreview item={selectedItem} />
              </div>
            </div> */}
        </Col>
        <Col>
          <Row>
            <Col lg={9}>{/* <SlideBreadcrumb /> */}</Col>
            <Col>
              <SlideViewToolbar
                setDisplayStyle={setDisplayStyle}
                displayStyle={displayStyle}
              />
            </Col>
          </Row>
          <hr />
          <div>
            <SlideViewMain />
          </div>
        </Col>
        <Col lg={3}>
          <Tabs defaultActiveKey="Styling" id="left-tabs">
            <Tab eventKey="Styling" title="Styling">
              <h5>Select a style for your slide</h5>
              <Tabs defaultActiveKey="profile" id="styling-tabs">
                <Tab eventKey="Theme" title="Theme"></Tab>
                <Tab eventKey="Animation" title="Anim"></Tab>
                <Tab eventKey="Transition" title="Transition"></Tab>
              </Tabs>
            </Tab>
            <Tab eventKey="Info" title="Info">
              <SlideInfo />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
