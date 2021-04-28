import React, { SyntheticEvent } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from '../atoms/Input';
import withButtonAfter from './withButtonAfter';

const InputWithButtonAfter = withButtonAfter(Input);

const handleClick = (e: SyntheticEvent): void => {
  e.preventDefault();
  // eslint-disable-next-line no-alert
  alert('what a nice search!');
  // TODO: implement search behavior when time comes...
};

const SearchField = (): JSX.Element => {
  return (
    <InputWithButtonAfter
      onClick={handleClick}
      icon={faSearch}
      placeholder="Pesquisar..."
    />
  );
};

export default SearchField;
