import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import tallerImg from '../media/images/sponsors/taller.jpg';
import quantoImg from '../media/images/sponsors/quanto.jpg';
import fullcircleImg from '../media/images/sponsors/fullcircle.jpg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    paddingTop: 20,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 300,
    height: 150,
    '@media(min-width: 721px)': {
      height: 200,
    },
    // maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> a > img': {
      maxWidth: 200,
      maxHeight: 100,
      margin: '0 auto',
      display: 'block',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
  }),
};

const Sponsors = [
  {
    id: 3,
    name: 'Taller',
    avatar: tallerImg,
    link: 'https://taller.net.br',
  },
  {
    id: 5,
    name: 'Fullcircle',
    avatar: fullcircleImg,
    link: 'http://fullcircle.com.br',
  },
  {
    id: 4,
    name: 'Quanto',
    avatar: quantoImg,
    link: 'http://contaquanto.com.br',
  },
];

class TextSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Patrocínio" reverse />
        <div {...styles.cards}>
          {Sponsors.map(sponsor => {
            return (
              <div key={sponsor.id} {...styles.card}>
                <a href={sponsor.link} target="_blank">
                  <img src={sponsor.avatar} alt={sponsor.name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSponsor;
