import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projectData = [
    {
      name: "Find your Game",
      desription:
        "This quiz is designed to give users a new savepoint in their video game journey. By selecting tags. Get recommendations for all different genres, as well as receive price ranges for each of those answers.",
      gitHublink: "https://github.com/CollinA7/find-your-game",
      deployedLink: "https://dlope0831.github.io/find-your-game/",
      imageAndClass: "flip-card-front fyg",
    },
    {
      name: "Niche",
      desription:
        "Niche is a POS application focused on local e-commerce industries that allows up-and-coming entrepreneurs to springboard their restaurant business to the next level",
      gitHublink: "https://github.com/CollinA7/niche",
      deployedLink: "https://thawing-garden-93969.herokuapp.com/",
      imageAndClass: "flip-card-front niche",
    },
    {
      name: "Path-Finder",
      desription:
        "Path-Finder is an app that find National Parks in my area With information about the parks including An Image Location And a list of amenities that the parks offer",
      gitHublink: "https://github.com/CollinA7/path-finder",
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
