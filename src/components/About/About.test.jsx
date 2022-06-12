import { render, screen } from '@testing-library/react';
import { About } from '.';

describe('<About/>', () => {
  it('should render with default values', () => {
    render(<About>Texto</About>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
