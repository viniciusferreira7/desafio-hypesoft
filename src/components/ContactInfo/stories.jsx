import { ContactInfo } from '.';
import data from './data';

export default {
  title: 'ContactInfo',
  component: ContactInfo,
  args: data,
};

export const Templetes = (args) => {
  return (
    <div>
      <ContactInfo {...args} />
    </div>
  );
};
