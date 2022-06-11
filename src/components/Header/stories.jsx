import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'Header',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
