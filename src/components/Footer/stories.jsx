import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Footer',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
