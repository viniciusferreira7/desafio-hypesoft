import { render, screen } from '@testing-library/react';
import { Work } from '.';

describe('<Work/>', () => {
  it('should render with default values', () => {
    render(<Work>Texto</Work>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
