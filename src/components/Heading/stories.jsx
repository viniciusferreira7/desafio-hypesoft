import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    as: 'h1',
    size: 'big',
    bold: false,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
