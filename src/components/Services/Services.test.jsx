import { render, screen } from '@testing-library/react';
import { Services } from '.';

describe('<Services/>', () => {
  it('should render with default values', () => {
    render(<Services>Texto</Services>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
