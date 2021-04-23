import React from 'react';
import { render, screen } from '@testing-library/react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import HighlightIcon from './HighlightIcon';

describe('HighlightIcon component', () => {
  let highlighticon: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<HighlightIcon data-testid={testId} icon={faCalendarAlt} />);
    highlighticon = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(highlighticon).toMatchSnapshot();
  });
});
