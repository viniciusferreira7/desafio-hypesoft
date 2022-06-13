import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

describe('<PostCard/>', () => {
  it('should render with default values', () => {
    render(<PostCard>Texto</PostCard>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
