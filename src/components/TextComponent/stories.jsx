import { TextComponent } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'TextComponent',
    sizes: 2.0,
    color: theme.colors.gray_500,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
