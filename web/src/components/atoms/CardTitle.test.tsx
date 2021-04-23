import React from 'react';
import { render, screen } from '@testing-library/react';
import CardTitle from './CardTitle';

describe('CardTitle component', () => {
  let cardtitle: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<CardTitle data-testid={testId} />);
    cardtitle = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(cardtitle).toMatchSnapshot();
  });
});
