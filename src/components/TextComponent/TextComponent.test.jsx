import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent/>', () => {
  it('should render styles', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toHaveStyle({
      color: theme.colors.gray_500,
    });
  });

  it('should render sizes and color', () => {
    renderTheme(
      <TextComponent sizes={1.8} color={theme.colors.gray_500}>
        Texto
      </TextComponent>,
    );
    expect(screen.getByText('Texto')).toHaveStyle({
      'font-size': '1.8rem',
      color: theme.colors.gray_500,
    });
  });

  it('should math snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
