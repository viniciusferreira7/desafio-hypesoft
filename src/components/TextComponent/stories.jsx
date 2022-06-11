import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'TextComponent',
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
