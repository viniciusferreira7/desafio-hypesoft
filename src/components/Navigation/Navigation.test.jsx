import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Navigation } from '.';
import { fireEvent } from '@storybook/testing-library';
import { theme } from '../../styles/theme';

const mock = {
  links_1: 'link 1',
  links_2: 'link 2',
  links_3: 'link 3',
  links_4: 'link 4',
};

describe('<Navigation/>', () => {
  it('should render links', () => {
    renderTheme(<Navigation {...mock} />);
    expect(screen.getByText(/link 1/i)).toBeInTheDocument();
    expect(screen.getByText(/link 2/i)).toBeInTheDocument();
    expect(screen.getByText(/link 3/i)).toBeInTheDocument();
    expect(screen.getByText(/link 4/i)).toBeInTheDocument();
  });

  it('should render links', () => {
    renderTheme(<Navigation {...mock} />);
    expect(screen.getByText(/link 4/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render menu mobile an button for open and close the menu', () => {
    renderTheme(<Navigation {...mock} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Navigation {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
