import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent({ articles }) {
  return (
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
  );
}
