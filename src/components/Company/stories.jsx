import { Company } from '.';

export default {
  title: 'Company',
  component: Company,
};

export const Templetes = (args) => {
  return (
    <div>
      <Company {...args} />
    </div>
  );
};
