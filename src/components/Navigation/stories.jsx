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
};

export const Templetes = (args) => {
  return (
    <div>
      <Navigation {...args} />
    </div>
  );
};
