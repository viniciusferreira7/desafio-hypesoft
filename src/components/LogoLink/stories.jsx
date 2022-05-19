import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImage: 'assets/images/logo.svg',
    link: '',
  },
  argsTypes: {
    text: { type: 'string' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
