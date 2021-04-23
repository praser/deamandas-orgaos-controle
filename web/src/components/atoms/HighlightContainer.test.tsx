import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightContainer from './HighlightContainer';

describe('HighlightContainer component', () => {
  let highlightcontainer: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<HighlightContainer data-testid={testId} />);
    highlightcontainer = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(highlightcontainer).toMatchSnapshot();
  });
});
