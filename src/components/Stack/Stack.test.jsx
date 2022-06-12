import { render, screen } from '@testing-library/react';
import { Stack } from '.';

describe('<Stack/>', () => {
  it('should render with default values', () => {
    render(<Stack>Texto</Stack>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
