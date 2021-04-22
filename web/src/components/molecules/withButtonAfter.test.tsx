import React, { SyntheticEvent } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import Input from '../atoms/Input';
import withButtonAfter from './withButtonAfter';

const InputWithButtonAfter = withButtonAfter(Input);

describe('withButtonAfter high order component', () => {
  let element: HTMLElement;
  let button: HTMLElement;
  const fn = jest.fn((event: SyntheticEvent) => event);
  const icon = faAdjust;
  const placeholder = faker.name.lastName();
  const testId = 'input-with-test-after';

  beforeEach(() => {
    render(
      <InputWithButtonAfter
        onClick={fn}
        placeholder={placeholder}
        icon={icon}
        data-testid={testId}
      />,
    );
    element = screen.getByTestId(testId);
    button = screen.getByTestId('button');
  });

  it('is expected to have a button', () => {
    expect(button).not.toBeNull();
  });

  it('is expected to have a input', () => {
    expect(element).not.toBeNull();
  });

  it('is expected to have an icon', () => {
    const buttonIcon = within(button).getByTestId('icon');
    expect(buttonIcon).not.toBeNull();
  });

  it('is expected to call onClick function when button is clicked', () => {
    userEvent.click(button);
    expect(fn).toBeCalled();
  });
});
