import React, { useState } from 'react';
import coverPhoto from '../../assets/cover/Cover-photo.jpg';

const About = () => {

  


  return (
    <section className="my-5">
      <img src={coverPhoto} className='my-2 cover-photo' style={{ width: '50%' }} alt='cover' />
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