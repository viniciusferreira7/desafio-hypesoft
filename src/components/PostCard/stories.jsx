import { PostCard } from '.';
import data from '../Work/data';

export default {
  title: 'PostCard',
  component: PostCard,
  args: data.postCards[0],
};

export const Templetes = (args) => {
  return (
    <div>
      <PostCard {...args} />
    </div>
  );
};
