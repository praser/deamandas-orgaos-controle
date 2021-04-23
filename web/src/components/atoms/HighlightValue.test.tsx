import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightValue from './HighlightValue';

describe('HighlightValue component', () => {
  let highlightvalue: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<HighlightValue data-testid={testId}>1000</HighlightValue>);
    highlightvalue = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(highlightvalue).toMatchSnapshot();
  });
});
