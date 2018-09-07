import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ingresso from './Ingresso';

import macacoImg from '../media/images/macaco.jpg';

const styles = {
  container: css({
    backgroundImage: `url('${macacoImg}')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: Globals.colors.backgroundHeader,
    backgroundSize: '80%',
    backgroundPosition: '160% 10px',
    color: Globals.colors.primary,
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    '@media(max-width: 720px)': {
      backgroundSize: 'cover',
      backgroundPosition: '30% 100px',
    },
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    <Logo />
    <Ingresso />
    <Infos />
  </div>;

export default Header;
