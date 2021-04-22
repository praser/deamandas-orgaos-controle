import React from 'react';
import { render, screen } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar atomic component', () => {
  let topBar: HTMLElement;

  beforeEach(() => {
    render(<TopBar data-testid="top-bar" />);
    topBar = screen.getByTestId('top-bar');
  });

  it('is expected to match the snapshot', () => {
    expect(topBar).toMatchSnapshot();
  });
});
