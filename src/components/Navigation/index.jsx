import P from 'prop-types';
import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Moon } from '@styled-icons/bootstrap/Moon';
import * as Styled from './styles';
import { ThemeContext } from '../../ToggleThemeContext/index.';
import { SunFill } from '@styled-icons/bootstrap';

export const Navigation = ({ links_1, links_2, links_3, links_4, links_5 }) => {
  const [visible, setVisible] = useState(false);
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        {state.colors.white === '#FFFF' ? (
          <Styled.ButtonTheme onClick={() => dispatch({ type: 'lightTheme' })}>
            <Moon />
          </Styled.ButtonTheme>
        ) : (
          <Styled.ButtonTheme onClick={() => dispatch({ type: 'darkTheme' })}>
            <SunFill />
          </Styled.ButtonTheme>
        )}
        <Styled.NavLinks>
          <Styled.Links>
            <Link
              activeclasse="active"
              to={'About'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              {links_1}
            </Link>
          </Styled.Links>
          <Styled.Links>
            <Link
              activeclasse="active"
              to={'Stack'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              {links_2}
            </Link>
          </Styled.Links>
          <Styled.Links>
            <Link
              activeclasse="active"
              to={'Works'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              {links_3}
            </Link>
          </Styled.Links>
          <Styled.Links>
            <Link
              activeclasse="active"
              to={'Testimonial'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              {links_4}
            </Link>
          </Styled.Links>
          <Styled.Links>
            <Link
              activeclasse="active"
              to={'Contact'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              {links_5}
            </Link>
          </Styled.Links>
        </Styled.NavLinks>
      </Styled.Container>
    </>
  );
};

Navigation.propTypes = {
  links_1: P.string,
  links_2: P.string,
  links_3: P.string,
  links_4: P.string,
  links_5: P.string,
};
