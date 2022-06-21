import { Footer } from '@/components/Footer';
import { TestID } from '@/constants';
import { render } from '@testing-library/react';

describe('Footer', () => {
  test('should be able to see sofware version following semantic versioning', () => {
    const component = render(<Footer />);

    const version = component.getByTestId(TestID.VERSION).textContent;

    const semanticVersioningRegex =
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

    expect(version).toMatch(semanticVersioningRegex);
  });
});
