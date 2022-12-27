import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projectData = [
    {
      name: "Find your Game",
      desription: "Description",
      gitHublink: "https://github.com/CollinA7/find-your-game",
      deployedLink: "https://dlope0831.github.io/find-your-game/",
      imageAndClass: "flip-card-front fyg",
    },
    {
      name: "Niche",
      desription: "Description",
      gitHublink: "https://github.com/CollinA7/niche",
      deployedLink: "https://thawing-garden-93969.herokuapp.com/",
      imageAndClass: "flip-card-front niche",
    },
    {
      name: "Path-Finder",
      desription: "Description",
      gitHublink: "https://github.com/CollinA7/project-3",
      deployedLink: "https://blooming-sands-77631.herokuapp.com/",
      imageAndClass: "flip-card-front path-finder",
    },
  ];

  const projectMap = projectData.map((data) => (
    <Col xs={6} className=" card flip-card" key={data.name}>
      <div className="flip-card-inner">
        <div className={data.imageAndClass} />
        <div className="flip-card-back">
          <h3>{data.name}</h3>
          <p>{data.desription}</p>
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

  return (
    <Container>
      <h2>Portfolio</h2>
      <p>Hover over the cards below to find out more!</p>
      <Row>{projectMap}</Row>
    </Container>
  );
}
