import { Banner } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Banner/>', () => {
  it('should march snapshot', () => {
    const { container } = renderTheme(<Banner />);
    expect(container.parentElement).toBeInTheDocument();
  });
});
