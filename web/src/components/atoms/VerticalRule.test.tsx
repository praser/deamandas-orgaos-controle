import React from 'react';
import { render, screen } from '@testing-library/react';
import VerticalRule from './verticalRule';

describe('VerticalRule atomic component', () => {
  let vRule: HTMLElement;

  beforeEach(() => {
    render(<VerticalRule data-testid="v-rule" />);
    vRule = screen.getByTestId('v-rule');
  });

  it('is expected to match snapshot', () => {
    expect(vRule).toMatchSnapshot();
  });
});
