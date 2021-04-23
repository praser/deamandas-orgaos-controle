import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from './CardBody';

describe('CardBody component', () => {
  let cardbody: HTMLElement;
  const testId = 'testid';

  beforeEach(() => {
    render(<CardBody data-testid={testId} />);
    cardbody = screen.getByTestId(testId);
  });

  it('is expected to match the snapshot', () => {
    expect(cardbody).toMatchSnapshot();
  });
});
