import React from 'react';
import SelectSearch from 'react-select-search';
import SelectProps from './SelectProps';
import './Select.css';

const Select = ({ className, ...rest }: SelectProps): JSX.Element => (
  <span className={className} data-testid="select">
    <SelectSearch {...rest} />
  </span>
);

export default Select;
