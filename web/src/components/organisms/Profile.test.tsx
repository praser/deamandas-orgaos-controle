import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile organism component', () => {
  const name = 'Rubens Praser Júnior';
  const lotation = 'GEOTR';
  const image = 'image.png';

  beforeEach(() => {
    render(<Profile name={name} lotation={lotation} src={image} />);
  });

  it('is expected to render only first name', () => {
    const username = screen.getByTestId('username');
    expect(username).toHaveTextContent(/^Rubens$/);
  });
});
