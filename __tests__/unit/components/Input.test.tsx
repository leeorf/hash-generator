import { fireEvent, render } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { Input } from '@/components/Input';
import { TestID } from '@/constants';

describe('Input', () => {
  test('should hide input by default', () => {
    const component = render(<Input testId={TestID.GENERIC_INPUT} />);

    const input = component.getByTestId(
      TestID.GENERIC_INPUT
    ) as HTMLInputElement;

    expect(input.type).toBe('password');
  });
});
