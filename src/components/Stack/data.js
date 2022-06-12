import {
  Css3,
  Html5,
  Javascript,
  ReactLogo,
  Nodejs,
} from '@styled-icons/boxicons-logos';

import { Storybook } from '@styled-icons/simple-icons/Storybook';
import { Mysql, Mongodb } from '@styled-icons/simple-icons';
import { RecordVoiceOver } from '@styled-icons/material-outlined';
import { People } from '@styled-icons/bootstrap';

export default {
  title: 'My Stack',
  front: {
    text: 'Front End Development',
    icon: (
      <>
        <ReactLogo />
        <Javascript />
        <Html5 />
        <Css3 />
        <Storybook />
      </>
    ),
  },
  back: {
    text: 'Back End Development',
    icon: (
      <>
        <Nodejs />
        <Mysql />
        <Mongodb />
      </>
    ),
  },
  soft: {
    text: 'Soft Skills',
    icon: (
      <>
        <RecordVoiceOver />
        <People />
      </>
    ),
  },
};
