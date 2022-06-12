import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card/>', () => {
  it('should render with default values', () => {
    render(<Card>Texto</Card>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
