import React from 'react';
import { render, screen, within } from '@testing-library/react';
import faker from 'faker';
import Header from './Header';

describe('Header organism component', () => {
  const appName = faker.lorem.words(3);
  const name = faker.name.firstName();
  const lotation = faker.lorem.word(5);
  const src = faker.image.avatar();
  let header: HTMLElement;

  beforeEach(() => {
    render(
      <Header appName={appName} name={name} lotation={lotation} src={src} />,
    );
    header = screen.getByTestId('header');
  });

  it('is expected to display app name', () => {
    expect(header).toHaveTextContent(appName);
  });

  it('is expected to display user name', () => {
    expect(header).toHaveTextContent(name);
  });

  it('is expected to display user lotation', () => {
    expect(header).toHaveTextContent(lotation);
  });

  it('is expected to display user avatar', () => {
    const avatar = within(header).getByAltText('avatar');
    expect(avatar).toHaveAttribute('src', src);
  });
});
