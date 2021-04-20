import React from 'react';
import { render, screen } from '@testing-library/react';
import Username from './Username';

describe('Username atomic component', () => {
  const name = 'User name';
  let username: HTMLElement;

  beforeEach(() => {
    render(<Username>{name}</Username>);
    username = screen.getByText(name);
  });

  it('is expected to match the snapshot', () => {
    expect(username).toMatchSnapshot();
  });
});
