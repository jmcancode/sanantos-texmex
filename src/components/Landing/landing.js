import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../Menu/menu";

export default function Landing() {
  return (
    <Fragment>
      <section
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#171717",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderColor: "transparent",
        }}
        className="text-end"
      >
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h1 className="neonText">
              Feed me tacos <br /> and tell me <br /> I'm pretty
            </h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="text-center" style={{ paddingTop: "55%" }}>
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
                variant="outline-light"
                className="text-uppercase"
                as={Link}
                to="/menu"
              >
                Find us
              </Button>
            </span>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
}
