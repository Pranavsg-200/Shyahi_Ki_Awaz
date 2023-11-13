import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sample_Report from "./Sample_Report.json";
import RightTopHeaderConatiner from "./RightTopHeader/RightTopHeaderConatiner";
import CarouselComponent from "./Carousel/CarouselComponent";
import BelowContainer from "./BelowContainer/BelowContainer";
import SmallCardComponent from "./Carousel/SmallCardComponent";

export default function MainPage() {
  const [articles, setArticles] = useState(Sample_Report.results);

  const selectedArticle = articles[0];

  return (
    <Container>
      {/* Responsive Advertisement Container with Gap */}
      <Row className="advertisement-container">
        <Col lg={12} md={12} sm={12}>
          {/* Add your advertisement component here */}
          <div className="advertisement" style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '10px', marginBottom: '10px' }}>
            {/* Your advertisement content goes here */}
            Advertisement Content
          </div>
        </Col>
      </Row>

      <Container>
        <Row className="container1">
          <Col id="column1" lg={6} sm={12} xs={12} md={8}>
            <CarouselComponent articles={articles} />
            <Col>
              <SmallCardComponent articles={articles} />
            </Col>
          </Col>
          <RightTopHeaderConatiner />
        </Row>
      </Container>

      <Container>
        <Col lg={12} sm={12} xs={12} md={12}>
          <BelowContainer />
        </Col>
      </Container>
    </Container>
  );
}
