import { About } from '.';
import data from './data';

export default {
  title: 'About',
  component: About,
  args: data,
};

export const Templetes = (args) => {
  return (
    <div>
      <About {...args} />
    </div>
  );
};
