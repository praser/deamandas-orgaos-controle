import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';
import Avatar from './Avatar';

describe('Avatar molecule component', () => {
  const src = faker.image.avatar();
  let avatar: HTMLElement;

  beforeEach(() => {
    render(<Avatar src={src} />);
    avatar = screen.getByTestId('avatar');
  });

  it('is expected to be in the page', () => {
    expect(avatar).toBeVisible();
  });

  it('is expected to render the correct image', () => {
    const image = screen.getByAltText('avatar');
    expect(image).toHaveAttribute('src', src);
  });
});
