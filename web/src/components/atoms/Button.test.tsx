import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button atomic component', () => {
  let button: HTMLElement;

  it('is expected to match the snapshot', () => {
    render(<Button data-testid="button" />);
    button = screen.getByTestId('button');
    expect(button).toMatchSnapshot();
  });

  it('is expected to have 30px if small property is set', () => {
    render(<Button data-testid="button" small />);
    button = screen.getByTestId('button');
    expect(button).toHaveStyle('height: 30px');
  });

  it('is expected to have 44px if small property is not set', () => {
    render(<Button data-testid="button" />);
    button = screen.getByTestId('button');
    expect(button).toHaveStyle('height: 44px');
  });
});
