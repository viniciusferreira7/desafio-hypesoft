import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Button } from '.';
import { theme } from '../../styles/theme';

describe('<Button/>', () => {
  it('should render with default values', () => {
    renderTheme(
      <Button background sizes={1.6}>
        Texto
      </Button>,
    );

    const button = screen.getByText('Texto');
    expect(button).toHaveStyle({
      'font-size': theme.font.sizes.small,
      background: theme.colors.secondaryColor,
      color: theme.colors.white,
    });
  });

  it('should render with default values', () => {
    const { container } = renderTheme(
      <Button background={undefined} sizes={undefined}>
        Texto
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });
});
