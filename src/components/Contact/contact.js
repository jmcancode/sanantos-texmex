import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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

export default function Contact() {
  return (
    <motion.div {...exit} transition={transition} className="container">
      <Row className="p-3">
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link to="/menu" style={{ textDecoration: "none", color: "#ef426f" }}>
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
        </Col>
      </Row>
      <Row xs={1} md={1} lg={1} className="pt-4">
        <Col>
          <h1 style={{ color: "#ff8200" }}>Find Us</h1>
        </Col>
        <Col className="m-2"></Col>
      </Row>
    </motion.div>
  );
}
