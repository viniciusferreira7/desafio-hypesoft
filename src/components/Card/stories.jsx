import { Card } from '.';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Storybook } from '@styled-icons/simple-icons/Storybook';

export default {
  title: 'Card',
  component: Card,
  args: {
    icon: (
      <>
        <ReactLogo />
        <Javascript />
        <Html5 />
        <Css3 />
        <Storybook />
      </>
    ),
    stack: 'Front End Development',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
