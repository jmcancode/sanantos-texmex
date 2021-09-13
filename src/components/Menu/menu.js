import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
// images
import image from "../../assets/besttaco.webp";
import image2 from "../../assets/satacos.webp";
import lemon from "../../assets/laura-chouette-TecD-1MTMiE-unsplash.webp";
import bRed from "../../assets/bigred.webp";
import sweetTea from "../../assets/crystal-huff-CCowelQ2pLw-unsplash.webp";
import water from "../../assets/lennart-schneider-RjiHJrowSi8-unsplash.webp";
// animation
import { motion } from "framer-motion";
// routing
import { Link } from "react-router-dom";
// custom components
import Footer from "../Footer/footer";

const exit = {
  exit: {
    opacity: 0,
  },
};

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function Menu() {
  return (
    <Fragment>
      <motion.div {...exit} transition={transition} className="container">
        <Row className="p-3">
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#ef426f" }}>
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
              </svg>
              <span style={{ fontFamily: "Caveat" }}>go back</span>
            </Link>
            <Link
              to="/location"
              style={{ textDecoration: "none", color: "#ef426f" }}
            >
              <span style={{ fontFamily: "Caveat" }}>Let's Chat</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
              </svg>
            </Link>
          </Col>
        </Row>

        <Row xs={1} md={1} lg={1} className="pt-4">
          <Col>
            <h1 style={{ color: "#ff8200", letterSpacing: "1.3px" }}>Menu</h1>
          </Col>
          <Col className="m-2">
            <h5>Breakfast Tacos</h5>
            <small className="text-muted">
              Our tacos are made fresh daily using local Texas ingredients. Just
              ask to add extra cheese or bacon on your tacos!
            </small>
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
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
                <Card.Text>Potato & Egg</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
                <Card.Text>Chorizo & Bean</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
                  objectPostion: "0% -0%",
                }}
              />
              <Card.Body>
                <Card.Text>Fresh Squeezed Lemonade</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
            <Card
              className="m-2"
              style={{
                borderColor: "transparent",
              }}
            >
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
      <div className="pt-4">
        <Footer />
      </div>
    </Fragment>
  );
}
