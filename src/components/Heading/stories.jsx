import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templete = (args) => <Heading {...args} />;
