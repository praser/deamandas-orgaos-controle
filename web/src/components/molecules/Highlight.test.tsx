import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import faker from 'faker';
import Highlight from './Highlight';

describe('Highlight molecule component', () => {
  let highlight: HTMLElement;
  const title = faker.lorem.words(3);
  const content = faker.datatype.number(999);
  const testId = 'highlight';

  beforeEach(() => {
    render(
      <Highlight title={title} icon={faCalendarAlt} data-testid={testId}>
        {content}
      </Highlight>,
    );
    highlight = screen.getByTestId(testId);
  });

  it('is expected to be in the page', () => {
    expect(highlight).toBeVisible();
  });

  it('is expected to have a title', () => {
    expect(highlight).toHaveTextContent(title);
  });

  it('is expected to have a content', () => {
    expect(highlight).toHaveTextContent(content);
  });

  it('is expected to have an icon', () => {
    const icon = within(highlight).getByTestId('highlight-icon');
    expect(icon).toBeVisible();
  });
});
