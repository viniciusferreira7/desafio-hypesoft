import { Stack } from '.';
import data from './data';

export default {
  title: 'Stack',
  component: Stack,
  args: data,
};

export const Templetes = (args) => {
  return (
    <div>
      <Stack {...args} />
    </div>
  );
};
