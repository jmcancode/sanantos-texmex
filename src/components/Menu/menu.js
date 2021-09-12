import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import image from "../../assets/besttaco.webp";
import image2 from "../../assets/satacos.webp";
import lemon from "../../assets/angelica-echeverry-t261fCT-lEc-unsplash.jpg";
import bRed from "../../assets/bigred.png";
import sweetTea from "../../assets/crystal-huff-CCowelQ2pLw-unsplash.jpg";
import water from "../../assets/lennart-schneider-RjiHJrowSi8-unsplash.jpg";
import { motion } from "framer-motion";


export default function Menu() {
  return (
    <Fragment>
      <motion.div className="container">
        <Row >
          <Col className="m-2">
            <p>Breakfast Tacos</p>
            <small className="text-muted">
              All of our tacos are made fresh daily with local Texas
              ingredients.
            </small>
          </Col>
          <Col className="m-2">
            <p> Add to your order</p>
            <ul>
              <li>Add Cheese</li>
              <li>Add Bacon</li>
            </ul>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={3}>
          <Col>
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
              <Card.Img
                src={image}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Bean & Cheese</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image2}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Bacon & Egg</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Potato & Egg</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image2}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Chorizo & Egg</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Chorizo & Bean</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image2}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Chorizo & Potato</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={image}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Steak & Eggs</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="m-2">
            <h5>Drinks</h5>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={3}>
          <Col>
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
              <Card.Img
                src={lemon}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>Fresh Squeezed Lemonade</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={bRed}
                alt="image"
                width={100}
                height={100}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "contain",
                }}
              />
              <Card.Body>
                <Card.Text>Big Red</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={sweetTea}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                  objectPosition: "0% -0%",
                }}
              />
              <Card.Body>
                <Card.Text>Sweet Tea</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Img
                src={water}
                alt="image"
                width={100}
                height={100}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  objectFit: "cover",
                  objectPosition: "0% -0%",
                }}
              />
              <Card.Body>
                <Card.Text>Water</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Fragment>
  );
}
