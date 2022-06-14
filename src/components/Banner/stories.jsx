import { Banner } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    children: 'Banner',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Banner {...args} />
    </div>
  );
};
