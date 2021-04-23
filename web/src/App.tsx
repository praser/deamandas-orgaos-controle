import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Highlight from './components/molecules/Highlight';

const App = (): JSX.Element => (
  <Highlight title="Lorem ipsum dolor" icon={faCalendarAlt}>
    R$ 3.900,00
  </Highlight>
);

export default App;
