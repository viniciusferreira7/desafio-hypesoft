import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<SectionBackground/>', () => {
  it('should render with background white ', () => {
    renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );

    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
  });

  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>,
    );

    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground background>Children</SectionBackground>,
    );
    expect(screen.getByText('Children').parentElement).toHaveStyleRule(
      'background',
      theme.colors.primaryColor,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
