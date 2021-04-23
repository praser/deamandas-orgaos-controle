import React from 'react';
import { render, screen, within } from '@testing-library/react';
import faker from 'faker';
import Card from './Card';

describe('Card molecule component', () => {
  let card: HTMLElement;
  const testId = 'card';
  const title = faker.lorem.words(3);

  beforeEach(() => {
    render(
      <Card title={title}>
        <p>{faker.lorem.sentence()}</p>
      </Card>,
    );
    card = screen.getByTestId(testId);
  });

  it('is expected to be visible', () => {
    expect(card).toBeVisible();
  });

  it('is expected to have a title', () => {
    expect(card).toHaveTextContent(title);
  });

  it('is expected to have a body', () => {
    const body = within(card).getByTestId('card-body');
    expect(body).not.toBeNull();
  });
});
