import React, { useState } from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
// import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'About Me' },
    { name: 'Projects', description: 'My Projects' },
    { name: 'Resume', description: 'My Resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <h1>Brett Howard</h1>
          <h3>Full-Stack Web Developer</h3>
            <Section currentCategory={currentCategory}/>
          </>
        ) : (
          <ContactForm/>
        )}
      </main>
    </div>
  );
}

export default App;
