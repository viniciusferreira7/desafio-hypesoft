import { renderTheme } from '../../styles/render-theme';
import { Main } from '.';

describe('<Main/>', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Main />);
    expect(container).toMatchSnapshot();
  });
});
