import React from 'react';
import { render, screen } from '@testing-library/react';
import styled from 'styled-components';
import withLoading from './withLoading';

const testEl = styled.div``;
const WithLoading = withLoading(testEl);

describe('withButtonAfter high order component', () => {
  let element: HTMLElement;
  const testId = 'with-loading';

  beforeEach(() => {
    render(<WithLoading loading data-testid={testId} />);
    element = screen.getByTestId(testId);
  });

  it('is expected to have class loading', () => {
    expect(element).toHaveClass('loading');
  });
});
