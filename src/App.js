import React, { useState } from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
// import Project from './components/Project';
// import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'Projects', description: 'Cards showing my projects and work' },
    { name: 'Resume', description: 'My resume showing skills and experience' }
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
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
