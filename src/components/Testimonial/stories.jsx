import { Testimonial } from '.';

export default {
  title: 'Testimonial',
  component: Testimonial,
  args: {
    title: 'Testimonial',
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Testimonial {...args} />
    </div>
  );
};
