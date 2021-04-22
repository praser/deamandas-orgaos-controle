import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select atomic component', () => {
  let select: HTMLElement;
  const testId = 'select';

  beforeEach(() => {
    const data = [
      { value: 'a', name: 'a' },
      { value: 'b', name: 'b' },
      { value: 'c', name: 'c' },
      { value: 'd', name: 'd' },
    ];

    render(<Select options={data} />);
    select = screen.getByTestId(testId);
  });

  it('is expected to match snapshot', () => {
    expect(select).toMatchSnapshot();
  });
});
