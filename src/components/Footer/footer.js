import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Fragment>
      <div
        style={{
          height: "120px",
          width: "100%",
          backgroundColor: "#8a8d8f",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: " 5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <div>
          <Row xs={1} md={1} lg={1} className="pt-3">
            <Col className="text-center">
              <small className="text-white" style={{ fontSize: "11px" }}>
                Design & Development by{" "}
                <a
                  style={{ textDecoration: "none", color: "#c60000" }}
                  href="https://www.jonmichaelnarvaez.com"
                  target="__blank"
                  rel="noopener"
                >
                  JM
                </a>
              </small>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}
