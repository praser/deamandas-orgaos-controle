import React from 'react';
import { render, screen } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('CardHeader component', () => {
  let cardheader: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<CardHeader data-testid={testId} />);
    cardheader = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(cardheader).toMatchSnapshot();
  });
});
