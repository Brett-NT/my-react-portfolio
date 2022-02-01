import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    currentPage,
    setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href='#' onClick={() => setCurrentPage("About")}>
          Home
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setCurrentPage("About")}>About</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setCurrentPage("Projects")}>Projects</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setCurrentPage("ContactForm")}>Contact</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a target="_blank" href="/Resume/My Resume.pdf">Resume</a>
          </li>

          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;