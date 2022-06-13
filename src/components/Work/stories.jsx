import { Work } from '.';
import data from './data';

export default {
  title: 'Work',
  component: Work,
  args: data.postCards[0],
};

export const Templetes = (args) => {
  return (
    <div>
      <Work {...args} />
    </div>
  );
};
