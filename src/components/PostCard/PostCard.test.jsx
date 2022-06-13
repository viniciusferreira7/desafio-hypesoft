import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard } from '.';

describe('<PostCard/>', () => {
  it('should render with default values', () => {
    renderTheme(<PostCard srcImg="image" subTitle="test" link="link" />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByAltText(/Arrow/i).parentElement).toHaveAttribute(
      'href',
      'link',
    );
  });

  // it('should match snapshot', () => {
  //   const { container } = renderTheme(
  //     <PostCard srcImg="image" subTitle="test" link="link" />,
  //   );

  //   expect(container).toMatchSnapshot();
  // });
});
