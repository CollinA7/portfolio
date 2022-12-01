import React from 'react';

export default function About() {
  return (
    <div className='row'>
      <h2>About Page</h2>
      <div className='col'>
        <img
        src={require('../assets/images/about-pic.jpg').default}
        alt={'Me excited about a new computer part'}
        />
      </div>
      <div className='col'>
        <p>
          Hi there!
        </p>
        <p>
          My name is Collin. I am from San Antonio, Texas. I and a soon to be father and have many hobbies. Some include
          keeping a saltwater fish tank, video games, 3D printing, and now web development!
          Although I am a new web developer I am a fast learner and have always been good at problem solving.
          
        </p>
      </div>
    </div>
  );
}
