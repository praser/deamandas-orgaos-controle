import React from 'react';
import Select from './components/atoms/Select';

const options = [
  { value: 'cgu', name: 'CGU - Controladoria Geral da União' },
  { value: 'mpf', name: 'MPF - Ministério Público Federal' },
  { value: 'tcu', name: 'TCU - Tribunal de Contas da União' },
];

const App = (): JSX.Element => (
  <Select
    closeOnSelect={false}
    printOptions="on-focus"
    multiple
    placeholder="Selecione um órgão de controle"
    options={options}
    value={['cgu']}
  />
);

export default App;
