import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer/>', () => {
  it('should render with default values', () => {
    renderTheme(<Footer />);
    expect(screen.getByAltText(/hypesoft/i)).toHaveStyle({
      width: '26.3rem',
      height: '5.9rem',
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
