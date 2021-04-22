import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchField from './SerchField';

describe('SearchField molecule component', () => {
  let searchField: HTMLElement;

  beforeEach(() => {
    render(<SearchField />);
    searchField = screen.getByPlaceholderText('Pesquisar...');
  });

  it('is expected to be in the page', () => {
    expect(searchField).toBeVisible();
  });

  it('is expected to match snapshot', () => {
    expect(searchField).toMatchSnapshot();
  });
});
