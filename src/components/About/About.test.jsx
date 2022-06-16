import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { About } from '.';
import data from './data';

describe('<About/>', () => {
  it('should render with default values', () => {
    renderTheme(<About {...data} />);
    expect(screen.getByText(/focused/i)).toBeInTheDocument();
    expect(screen.getByText(/over/i)).toBeInTheDocument();
    expect(screen.getByText('1+')).toBeInTheDocument();
    expect(screen.getByText('30+')).toBeInTheDocument();
    expect(screen.getByAltText(/Arrow/i)).toHaveAttribute(
      'src',
      'assets/images/Group.png',
    );
  });
});
