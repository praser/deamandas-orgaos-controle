import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileContainer from './ProfileContainer';

describe('ProfileContainer atomic component', () => {
  let profileContainer: HTMLElement;

  beforeEach(() => {
    render(<ProfileContainer data-testid="profile-container" />);
    profileContainer = screen.getByTestId('profile-container');
  });

  it('is expected to match the snapshot', () => {
    expect(profileContainer).toMatchSnapshot();
  });
});
