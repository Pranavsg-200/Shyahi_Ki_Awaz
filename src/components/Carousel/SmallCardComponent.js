import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function SmallCardComponent({ articles }) {
  return (
    <Row>
      {articles.slice(1, 4).map((article, index) => (
        <Col lg={4} md={4} sm={6} xs={12} key={index}>
          <Card>
            <Card.Img src={article.image_url} alt={article.title} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
