import React from 'react';
import SelectSearch from 'react-select-search';
import SelectProps from './SelectProps';
import './Select.css';

const Select = (props: SelectProps): JSX.Element => (
  <span data-testid="select">
    <SelectSearch {...props} />;
  </span>
);

export default Select;
