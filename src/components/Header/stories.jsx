import { Header } from '.';
import data from './data';

export default {
  title: 'Header',
  component: Header,
  args: data,
};

export const Templetes = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
