import { ContactForm } from '.';

export default {
  title: 'ContactForm',
  component: ContactForm,
  args: {
    children: 'ContactForm',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <ContactForm {...args} />
    </div>
  );
};
