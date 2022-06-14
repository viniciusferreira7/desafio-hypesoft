import { render, screen } from '@testing-library/react';
import { Testimonial } from '.';

describe('<Testimonial/>', () => {
  it('should render with default values', () => {
    render(<Testimonial>Texto</Testimonial>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
