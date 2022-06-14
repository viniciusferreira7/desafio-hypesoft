import { screen } from '@testing-library/react';
import { Client } from '.';
import { renderTheme } from '../../styles/render-theme';

const mock = {
  srcImg: 'assets/images/photo/cleber-photo.jpg',
  name: 'Cleber Souza',
  profession: 'Data Analyst',
  company: 'Bonfiglioli',
};

describe('<Client/>', () => {
  it('should render with default values', () => {
    renderTheme(<Client {...mock} />);
    expect(screen.getByText(/cleber/i)).toBeInTheDocument();
    expect(screen.getByText(/data/i)).toBeInTheDocument();
    expect(screen.getByText(/bonfiglioli/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Client {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
