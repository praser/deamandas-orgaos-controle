import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Topbar,
  MainContent,
  TopControls,
  InlineGroup,
  Content1,
  Content2,
} from './Dashboard.styled';

describe('Dashboard layout styled components', () => {
  const testId = 'layout';

  it('Topbar is expected to match the snapshot', () => {
    render(<Topbar data-testid={testId} />);
    const topbar = screen.getByTestId(testId);
    expect(topbar).toMatchSnapshot();
  });

  it('MainContent is expected to match the snapshot', () => {
    render(<MainContent data-testid={testId} />);
    const mainContent = screen.getByTestId(testId);
    expect(mainContent).toMatchSnapshot();
  });

  it('TopControls is expected to match the snapshot', () => {
    render(<TopControls data-testid={testId} />);
    const topControls = screen.getByTestId(testId);
    expect(topControls).toMatchSnapshot();
  });

  it('InlineGroup is expected to match the snapshot', () => {
    render(<InlineGroup data-testid={testId} />);
    const inlineGroup = screen.getByTestId(testId);
    expect(inlineGroup).toMatchSnapshot();
  });

  it('Content1 is expected to match the snapshot', () => {
    render(<Content1 data-testid={testId} />);
    const content1 = screen.getByTestId(testId);
    expect(content1).toMatchSnapshot();
  });

  it('Content2 is expected to match the snapshot', () => {
    render(<Content2 data-testid={testId} />);
    const content2 = screen.getByTestId(testId);
    expect(content2).toMatchSnapshot();
  });
});
