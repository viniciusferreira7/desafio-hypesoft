import { Client } from '.';

export default {
  title: 'Client',
  component: Client,
  args: {
    srcImg: 'assets/images/photo/cleber-photo.jpg',
    name: 'Cleber Souza',
    profession: 'Data Analyst',
    company: 'Bonfiglioli',
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Client {...args} />
    </div>
  );
};
