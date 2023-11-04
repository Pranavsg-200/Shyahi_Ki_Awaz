import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import RightTopHeaderConatiner from "./RightTopHeader/RightTopHeaderConatiner";
import Sample_Report from "./Sample_Report.json";

export default function MainPage() {
  const [articles, setArticles] = useState(Sample_Report.results);

  return (
    <>
      <Container>
        <Container>
          <Row className="container1">
            <Col id="column1" lg={6} sm={12} xs={12} md={8}>
              <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col id="column2" lg={2} sm={12} xs={12} md={4}>
              xs=6 md=4
            </Col>
            <Col id="column3" lg={4} sm={12} xs={12} md={12}>
              xs=6 md=4
            </Col>
            <RightTopHeaderConatiner/>
          </Row>
        </Container>
      </Container>
    </>
  );
}
