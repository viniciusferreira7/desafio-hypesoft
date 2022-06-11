import { Navigation } from '.';

export default {
  title: 'Navigation',
  component: Navigation,
  args: {
    links_1: 'about',
    links_2: 'services',
    links_3: 'works',
    links_4: 'contact',
  },
  argsTypes: {
    links_1: { type: 'string' },
    links_2: { type: 'string' },
    links_3: { type: 'string' },
    links_4: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Navigation {...args} />
    </div>
  );
};
