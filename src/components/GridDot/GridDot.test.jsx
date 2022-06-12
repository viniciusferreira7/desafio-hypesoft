import { render } from '@testing-library/react';
import { GridDot } from '.';

describe('<GridDot/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<GridDot />);
    expect(container).toMatchSnapshot();
  });
});
