import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarContainer from './AvatarContainer';

describe('Avatar container atomic component', () => {
  let avatarContainer: HTMLElement;

  beforeEach(() => {
    render(<AvatarContainer data-testid="container" />);
    avatarContainer = screen.getByTestId('container');
  });

  it('is expected to match the snapshot', () => {
    expect(avatarContainer).toMatchSnapshot();
  });
});
