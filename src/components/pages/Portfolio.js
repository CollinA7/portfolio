import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projectData = [
    {
      name: "find-your-game",
      desription: "blah blah",
      link: "http://blahblah",
    },
  ];

  return (
    <Container>
      <h2>Portfolio</h2>
      <Row>
        <Col xs={6} className=" card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front fyg" />
            <div className="flip-card-back">
              <h3>Find your Game</h3>
              <p>game description</p>
              <p>also description</p>
              <a
                href="https://github.com/CollinA7/portfolio-2"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <br />
              <a
                href="https://dlope0831.github.io/find-your-game/"
                rel="noreferrer"
                target="_blank"
              >
                Deployed app
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
