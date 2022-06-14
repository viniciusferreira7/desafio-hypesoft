import { Testimonial } from '.';

export default {
  title: 'Testimonial',
  component: Testimonial,
  args: {
    children: 'Testimonial',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Testimonial {...args} />
    </div>
  );
};
