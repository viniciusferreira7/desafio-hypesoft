import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Qoute } from '../Qoute';
import { Client } from '../Client';
import data from './data';

export const Testimonial = ({ title }) => {
  return (
    <Styled.Container>
      <Heading size="large">
        {title} <div></div>
      </Heading>
      <Styled.ClientContainer>
        <Styled.Group>
          {data.map((client) => (
            <Client
              key={client.id}
              srcImg={client.srcImg}
              name={client.name}
              profession={client.profession}
              company={client.company}
            />
          ))}
        </Styled.Group>
        <Qoute comments={data[0].comments} />
      </Styled.ClientContainer>
    </Styled.Container>
  );
};

Testimonial.propTypes = {
  title: P.string.isRequired,
};
