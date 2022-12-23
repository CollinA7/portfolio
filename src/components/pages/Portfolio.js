import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projectData = [
    {
      name: "Find your Game",
      desription: "Description",
      gitHublink: "https://github.com/CollinA7/portfolio-2",
      deployedLink: "https://dlope0831.github.io/find-your-game/",
      image: "./assets/images/fyg.jpg",
    },
  ];

  const projectMap = projectData.map((data) => (
    <Col xs={6} className=" card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front fyg" />
        <div className="flip-card-back">
          <h3>{data.name}</h3>
          <p>{data.desription}</p>
          <p>also description</p>
          <a href={data.gitHublink} rel="noreferrer" target="_blank">
            Github
          </a>
          <br />
          <a href={data.deployedLink} rel="noreferrer" target="_blank">
            Deployed app
          </a>
        </div>
      </div>
    </Col>
  ));

  console.log(projectMap);
  return (
    <Container>
      <h2>Portfolio</h2>
      <Row>{projectMap}</Row>
    </Container>
  );
}
