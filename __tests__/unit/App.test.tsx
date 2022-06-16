import { App } from '@/components/App';
import { TestID } from '@/constants';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should render App', () => {
    const component = render(<App />);
    expect(component.getAllByTestId(TestID.APP_GRETTING)).toBeTruthy();
  });
});
