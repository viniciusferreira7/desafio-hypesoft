import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main/>', () => {
  it('should render with default values', () => {
    render(<Main>Texto</Main>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
