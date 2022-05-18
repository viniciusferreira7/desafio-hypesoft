import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('should render with default values', () => {
    renderTheme(<LogoLink>Texto</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
