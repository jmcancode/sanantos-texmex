import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FourOhFour() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#171717",
        }}
      >
        <Row>
          <Col>
            <h1 className="neonText">Nommbree shuuuut up! 404 Error</h1>
          </Col>
        </Row>
        <Row className="text-center pt-5 mt-4">
          <Col>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
              </svg>{" "}
              go back
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
