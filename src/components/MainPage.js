import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sample_Report from "./Sample_Report.json";
import RightTopHeaderConatiner from "./RightTopHeader/RightTopHeaderConatiner";
import CarouselComponent from "./CarouselComponent";

export default function MainPage() {
  const [articles, setArticles] = useState(Sample_Report.results);

  const selectedArticle = articles[0];

  return (
    <Container>
      <Container>
        <Row className="container1">
          <Col id="column1" lg={6} sm={12} xs={12} md={8}>
            <CarouselComponent articles={articles} />
          </Col>
          <RightTopHeaderConatiner />
        </Row>
      </Container>
    </Container>
  );
}
