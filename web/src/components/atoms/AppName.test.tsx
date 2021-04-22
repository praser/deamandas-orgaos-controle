import React from 'react';
import { render, screen } from '@testing-library/react';
import AppName from './AppName';

describe('AppName atomic component', () => {
  const text = 'Nome do App';
  const testId = 'app-title';
  let appName: HTMLElement;

  beforeEach(() => {
    render(<AppName data-testid={testId}>{text}</AppName>);
    appName = screen.getByTestId(testId);
  });

  it('is expected to match snapshot', () => {
    expect(appName).toMatchSnapshot();
  });
});
