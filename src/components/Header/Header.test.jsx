import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';
import data from './data';
import { theme } from '../../styles/theme';

describe('<Header/>', () => {
  it('should render link', () => {
    const { container } = renderTheme(<Header {...data}>Texto</Header>);

    expect(screen.getByText('about')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it('should render title and your styles', () => {
    renderTheme(<Header {...data}>Texto</Header>);

    expect(screen.getByRole('heading', { name: /,/i })).toBeInTheDocument();
    expect(screen.getByText(/engineer/i)).toHaveStyle({
      color: theme.colors.secondaryColor,
    });
  });

  it('should render data empty', () => {
    renderTheme(
      <Header srcImg="" links={[]} title={[]}>
        Texto
      </Header>,
    );
  });

  it('should render icons', () => {
    renderTheme(<Header {...data}>Texto</Header>);

    expect(screen.getByLabelText(/github/i).parentElement).toHaveAttribute(
      'href',
      'https://github.com/viniciusferreira7',
    );
  });
});
