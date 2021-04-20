import React from 'react';
import { render, screen } from '@testing-library/react';
import UserLotation from './UserLotation';

describe('UserLotation atomic component', () => {
  const lotation = 'lotation';
  let userLotation: HTMLElement;

  beforeEach(() => {
    render(<UserLotation>{lotation}</UserLotation>);
    userLotation = screen.getByText(lotation);
  });

  it('is expected to match the snapshot', () => {
    expect(userLotation).toMatchSnapshot();
  });
});
