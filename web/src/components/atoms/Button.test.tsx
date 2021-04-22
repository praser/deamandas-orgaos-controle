import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button atomic component', () => {
  let button: HTMLElement;

  beforeEach(() => {
    render(<Button data-testid="button" />);
    button = screen.getByTestId('button');
  });

  it('is expected to match the snapshot', () => {
    expect(button).toMatchSnapshot();
  });
});
