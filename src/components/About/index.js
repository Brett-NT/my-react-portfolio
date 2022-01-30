import React from 'react';
import coverPhoto from '../../assets/cover/Portfolio-portrait.jpeg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Brett Howard</h1>
      <h3 id='about-sub'>Full-Stack Web Developer</h3>
      <img src={coverPhoto} className='my-2' style={{ width: '50%' }} alt='cover' />
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;