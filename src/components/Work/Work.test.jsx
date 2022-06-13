import { screen } from '@testing-library/react';
import { Work } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Work/>', () => {
  it('should render with default value', () => {
    renderTheme(<Work title="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  // it('should match snapshot', () => {
  //   const { container } = renderTheme(<Work title="test" />);
  //   expect(container).toMatchSnapshot();
  // });
});
