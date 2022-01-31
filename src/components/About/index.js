import React, { useState } from 'react';
import coverPhoto from '../../assets/cover/Portfolio-portrait.jpeg';

const About = ({ category }) => {

  


  return (
    <section className="my-5">
      <h1 id="about">Brett Howard</h1>
      <h3 id='about-sub'>Full-Stack Web Developer</h3>
      <img src={coverPhoto} className='my-2' style={{ width: '50%' }} alt='cover' />
      <div className="my-2">
        <p>
          Hey! My name is Brett Howard, and I am a Full-Stack Web Developer. I graduated from the University of Utah Coding Bootcamp
          in February of 2022, and I have worked on several different projects, each handling different technologies,
          libraries, and coding languages. Moving forward, I hope to continue honing my skills and find a career in this field
          where I can contribute to a team environment in a meaningful way.
        </p>
      </div>
    </section>
  );
}

export default About;