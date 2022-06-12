import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Card } from '.';

describe('<Card/>', () => {
  it('should render with default values', () => {
    renderTheme(<Card stack="front end">Texto</Card>);
    expect(screen.getByText(/front/i)).toBeInTheDocument();
    expect(screen.getByText(/front/i)).toHaveStyle({
      color: 'rgb(36, 36, 36)',
    });
    expect(screen.getByAltText(/Arrow/i)).toHaveAttribute(
      'src',
      'assets/images/GroupBlack.png',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Card stack="front end">Texto</Card>);
    expect(container).toMatchSnapshot();
  });
});
