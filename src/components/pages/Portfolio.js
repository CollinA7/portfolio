import React from "react";

export default function Portfolio() {
  const projectData = [];

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col card flip-card">
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
                href="https://github.com/CollinA7/portfolio-2"
                rel="noreferrer"
                target="_blank"
              >
                Deployed app
              </a>
            </div>
          </div>
        </div>
        <div className="col card niche">Niche</div>
      </div>
      {/* <div className="row">
        <div className="col card path-finder"></div>
        <div className="col card">Placeholder</div>
      </div> */}
    </div>
  );
}
