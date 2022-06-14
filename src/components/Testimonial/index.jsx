import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Qoute } from '../Qoute';
import { Client } from '../Client';
import data from './data';
import { useState } from 'react';

export const Testimonial = ({ title }) => {
  const [comments, setComments] = useState(0);

  const handleClick = (index) => {
    setComments(index);
  };

  return (
    <Styled.Container>
      <Heading size="large">
        {title} <div></div>
      </Heading>
      <Styled.ClientContainer>
        <Styled.Group>
          {data.map((client, index) => (
            <Client
              key={client.id}
              id={client.id}
              handleCLick={() => handleClick(index)}
              srcImg={client.srcImg}
              name={client.name}
              profession={client.profession}
              company={client.company}
            />
          ))}
        </Styled.Group>
        <Qoute
          comments={data[comments].comments}
          rating={data[comments].rating}
        />
      </Styled.ClientContainer>
    </Styled.Container>
  );
};

Testimonial.propTypes = {
  title: P.string.isRequired,
};
