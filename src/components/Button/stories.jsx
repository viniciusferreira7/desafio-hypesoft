import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    background: false,
    sizes: 1.6,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
