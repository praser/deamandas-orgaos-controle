import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input atomic component', () => {
  let input: HTMLElement;

  beforeEach(() => {
    render(<Input data-testid="input" />);
    input = screen.getByTestId('input');
  });

  it('is expected to match the snapshot', () => {
    expect(input).toMatchSnapshot();
  });
});
