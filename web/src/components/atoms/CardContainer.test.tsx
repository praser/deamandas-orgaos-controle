import React from 'react';
import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('CardContainer component', () => {
  let cardcontainer: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<CardContainer data-testid={testId} />);
    cardcontainer = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(cardcontainer).toMatchSnapshot();
  });
});
