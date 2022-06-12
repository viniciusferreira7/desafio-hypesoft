import { Services } from '.';
import data from './data';

export default {
  title: 'Services',
  component: Services,
  args: data,
};

export const Templetes = (args) => {
  return (
    <div>
      <Services {...args} />
    </div>
  );
};
