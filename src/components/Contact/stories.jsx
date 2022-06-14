import { Contact } from '.';

export default {
  title: 'Contact',
  component: Contact,
  args: {
    children: 'Contact',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Contact {...args} />
    </div>
  );
};
