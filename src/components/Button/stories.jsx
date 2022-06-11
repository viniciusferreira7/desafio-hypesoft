import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
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
