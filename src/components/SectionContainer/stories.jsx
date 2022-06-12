import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          arcu justo. Donec vel volutpat quam. Phasellus congue nec ligula eget
          consequat. Aliquam faucibus eu massa non feugiat. Vestibulum
          sollicitudin dictum volutpat. Quisque faucibus in ex id sagittis.
          Nullam aliquet dolor sapien, in tristique turpis luctus sit amet. Ut
          nunc urna, sodales ut faucibus ac, egestas ut dolor. Cras sagittis
          maximus rhoncus. Duis sed tortor sem.
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};

export const Templetes = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
