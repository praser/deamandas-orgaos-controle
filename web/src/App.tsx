import React from 'react';
import Profile from './components/organisms/Profile';
import TopBar from './components/atoms/TopBar';
import VerticalRule from './components/atoms/VerticalRule';
import SearchField from './components/molecules/SerchField';
import AppName from './components/atoms/AppName';

function App(): JSX.Element {
  return (
    <TopBar>
      <AppName>Demandas dos Órgãos de Controle</AppName>
      <SearchField />
      <VerticalRule />
      <Profile
        name="Rubens Praser Júnior"
        lotation="GEOTR"
        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      />
    </TopBar>
  );
}

export default App;
