import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/IMG_6440-removebg-preview.png";
import { motion } from "framer-motion";

const exit = {
  exit: {
    opacity: 0,
  },
};

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function Landing() {
  return (
    <motion.div {...exit} transition={transition} style={{ height: "100vh" }}>
      <section
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#171717",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
          borderColor: "transparent",
        }}
        className="text-end"
      >
        <Row>
          <Col className="text-center">
            <Image
              style={{
                maxHeight: "250px",
                maxWidth: "250px",
                height: "150px",
                width: "150px",
              }}
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h1 className="neonText">
              Feed me tacos <br /> and tell me <br /> I'm pretty
            </h1>
          </Col>
        </Row>
        <Row style={{ height: "150px" }}>
          <Col>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-muted"
            >
              <Button
                variant="dark"
                style={{
                  borderColor: "#ff8200",
                  backgroundColor: "transparent",
                  color: "#00b2a9",
                }}
                className="text-uppercase"
                as={Link}
                to="/menu"
              >
                Menu
              </Button>
            </span>
          </Col>
        </Row>
      </section>
    </motion.div>
  );
}
