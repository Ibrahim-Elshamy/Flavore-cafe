import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import item1 from "../../img/item1.png"
import item2 from "../../img/item2.png"
import item3 from "../../img/item3.png"
import "./features.css"


const itemData = [
  {
    image: item1,
    title: "Fresh Bakery",
    description:
      "Every morning we bake with passion — fresh, warm, and full of flavor to complement your perfect cup of coffee.",
  },
  {
    image: item2,
    title: "Quality Ingredients",
    description:
      "We proudly use locally sourced ingredients from our own factory to ensure quality and consistency in every bite.",
  },
  {
    image: item3,
    title: "Crafted with Care",
    description:
      "Your happiness is our priority. We craft every product with care and serve it with a smile.",
  },
];

export default function Features() {
  return (
    <section className="features py-5">
      <Container as="section">
        <div className="text-center mb-5">
          <h2 className='title'>Why Choose Us</h2>
          <p>
            We believe in freshness, quality, and customer happiness — every
            single day.
          </p>
        </div>
        <Row className="justify-content-center gap-3">
          {itemData.map((item, index) => (
            <Col
              key={index}
              md={3}
              xs={10}
              className="item text-center pt-4"
            >
              <img src={item.image} alt={item.title} />
              <h4 className="mb-3">{item.title}</h4>
              <p>{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
