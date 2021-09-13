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
                    placeholder="How can we help you?"
                    value={message}
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
            <Col>
              <a
                href="https://www.instagram.com/sanantostexmextacos/"
                rel="noopener"
                target="__blank"
                style={{ textDecoration: "none", color: "#171717" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                </svg>
              </a>
            </Col>
            {/* <Col>Twitter</Col>
            <Col>Facebook</Col> */}
          </Row>
        </div>
        <div className="pt-5">
          <Row>
            <Col className="text-center text-muted">
              <small>Located inside Daniels Backyard BBQ</small>
              <address>
                <a
                  href="https://g.page/danielsbackyardbbq?share"
                  rel="noopener"
                  target="__blank"
                  style={{ textDecoration: "none", color: "#ef426f" }}
                >
                  3636 Santafe ave, Long Beach, CA, 90810{" "}
                </a>
              </address>
              <small>
                Tuesday - Wednesday: 1 pm - 9 pm <br /> Friday - Sunday 11 am -
                9 pm{" "}
              </small>
            </Col>
          </Row>
        </div>
      </section>
    </motion.div>
  );
}
