import { screen } from '@testing-library/react';
import { Company } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Company/>', () => {
  it('should render with default values', () => {
    renderTheme(<Company />);
    expect(screen.getByAltText(/google/i)).toHaveStyle({
      width: '11.304rem',
      height: '2.6rem',
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Company />);
    expect(container).toMatchSnapshot();
  });
});
