import { render, screen } from '@testing-library/react';
import { ToggleThemeContext } from './index.';

describe('<ToggleThemeContext/>', () => {
  it('should render with default values', () => {
    render(<ToggleThemeContext>Texto</ToggleThemeContext>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <ToggleThemeContext>Texto</ToggleThemeContext>,
    );
    expect(container).toBeInTheDocument();
  });
});
