import { Stack } from '.';
import data from './data';

export default {
  title: 'Stack',
  component: Stack,
  args: data.stack[0],
};

export const Templetes = (args) => {
  return (
    <div>
      <Stack {...args} />
    </div>
  );
};
