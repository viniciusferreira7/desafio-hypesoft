import { GridDot } from '.';

export default {
  title: 'GridDot',
  component: GridDot,
  args: {
    color: '#242424',
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <GridDot {...args} />
    </div>
  );
};
