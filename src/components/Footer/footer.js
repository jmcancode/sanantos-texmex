import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Fragment>
      <div
        style={{
          height: "70px",
          width: "100%",
          backgroundColor: "#8a8d8f",
          borderTopRightRadius: "15px",
          borderTopLeftRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-end",
          padding: "15px",
        }}
      >
        <div>
          <Row>
            <Col>
              <a
                style={{ textDecoration: "none", fontSize: "18px" }}
                href="https://www.instagram.com/sanantostexmextacos"
                target="__blank"
                rel="noopener"
                className="text-end text-white"
              >
                <small> @sanantostexmextacos</small>
              </a>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
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
