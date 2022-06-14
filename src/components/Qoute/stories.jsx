import { Qoute } from '.';

export default {
  title: 'Qoute',
  component: Qoute,
  args: {
    comments: `“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”`,
    rating: 5.0,
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Qoute {...args} />
    </div>
  );
};
