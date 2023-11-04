import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import React, { useState } from "react";
import Sample_Report from "./Sample_Report.json";

export default function MainPage() {
  const [articles, setArticles] = useState(Sample_Report.results);

  return (
    <Container>
      <Container>
        <Row className="container1">
          <Col id="column1" lg={6} sm={12} xs={12} md={8}>
            <Carousel>
              {articles.map((article, index) => (
                <Carousel.Item key={index}>
                  {/* Assuming each article in the JSON file has an image_url and title */}
                  <img
                    className="d-block w-100"
                    src={article.image_url}
                    alt={article.title}
                  />
                  <Carousel.Caption>
                    <h3>{article.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col id="column2" lg={2} sm={12} xs={12} md={4}>
            xs=6 md=4
          </Col>
          <Col id="column3" lg={4} sm={12} xs={12} md={12}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
