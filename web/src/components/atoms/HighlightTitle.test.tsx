import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightTitle from './HighlightTitle';

describe('HighlightTitle component', () => {
  let highlighttitle: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<HighlightTitle data-testid={testId} />);
    highlighttitle = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(highlighttitle).toMatchSnapshot();
  });
});
