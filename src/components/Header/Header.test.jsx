import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

describe('<Header/>', () => {
  it('should render with default values', () => {
    renderTheme(<Header>Texto</Header>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
