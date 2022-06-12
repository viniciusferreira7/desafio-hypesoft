import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    children: 'Main',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Main {...args} />
    </div>
  );
};
