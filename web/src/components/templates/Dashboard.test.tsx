import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  let dashboard: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(
      <Dashboard
        data-testid={testId}
        topbar={<></>}
        filters={[<span key={1} />]}
        buttons={[<span key={1} />]}
        highlights={[<span key={1} />]}
        content1={<></>}
        content2={<></>}
        content3={<></>}
      />,
    );
    dashboard = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(dashboard).toMatchSnapshot();
  });
});
