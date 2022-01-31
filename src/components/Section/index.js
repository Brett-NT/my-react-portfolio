import React from 'react';
import Projects from '../Projects';
import About from '../About';
import Resume from '../Resume';

import { capitalizeFirstLetter } from '../../utils/helpers';

function Section(props) {
  const { currentCategory } = props;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <About category={currentCategory.name} />
    </section>
  );
}
export default Section;