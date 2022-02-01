import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'About Me' },
    { name: 'Projects', description: 'My Projects' },
    { name: 'Resume', description: 'My Resume' }
  ]);
  const [currentPage, setCurrentPage] = useState("About")

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>
    }
    else if (currentPage === 'ContactForm') {
      return <ContactForm/>
    }
    else {
      return <Projects/>
    }
  }

  return (
    <div>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Header/>
        {renderPage()}
        <Footer/>
      </main>
    </div>
  );
}

export default App;
