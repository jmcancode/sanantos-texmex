import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
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

export default function Location() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    window.open(
      `mailto:narvaez.jonmichael@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

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
          {/* <Link
            to="/connect"
            style={{ textDecoration: "none", color: "#ef426f" }}
          >
            <span style={{ fontFamily: "Caveat" }}>Connect with us</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </Col>
      </Row>
      <section
        id="contact"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Row xs={1} md={1} lg={1} className="pt-4">
            <Col className="m-2">
              <h1 style={{ color: "#ff8200", letterSpacing: "1.3px" }}>
                Connect
              </h1>
              <p style={{ fontSize: "13px", color: "#777" }}>
                Interest in catering services or large orders? Send us an email
                and we will reach out to you with in 24 hours.
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <Form onSubmit={submitForm}>
                <Form.Group className="m-2">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderLeftColor: "transparent",
                      borderBottomRightRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Control
                    type="text"
                    placeholder="someemail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderLeftColor: "transparent",
                      borderBottomRightRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderLeftColor: "transparent",
                      borderBottomRightRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="m-2">
                  <Form.Control
                    type="textarea"
                    row={5}
                    cols={5}
                    placeholder="Type here"
                    value={subject}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderLeftColor: "transparent",
                      borderBottomRightRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  />
                </Form.Group>
                <div className="d-grid gap-2 pt-3">
                  <Button
                    style={{
                      backgroundColor: "#00b2a9",
                      borderColor: "transparent",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <div
          className="pt-5"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Row>
            <Col>Instagram</Col>
            <Col>Twitter</Col>
            <Col>Facebook</Col>
          </Row>
        </div>
      </section>
    </motion.div>
  );
}
