import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarImage from './AvatarImage';

describe('Avatar image atomic component', () => {
  const alt = 'avatar';
  const src = 'some-image.png';
  let avatarImage: HTMLElement;

  beforeEach(() => {
    render(<AvatarImage src={src} alt={alt} />);
    avatarImage = screen.getByAltText(alt);
  });

  it('is expected to math the snapshot', () => {
    expect(avatarImage).toMatchSnapshot();
  });
});
