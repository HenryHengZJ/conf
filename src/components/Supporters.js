import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import rivendelImg from '../media/images/sponsors/rivendel.jpg';
import stqImg from '../media/images/sponsors/stq.jpg';
import greenmileImg from '../media/images/sponsors/greenmile.jpg';
import luizaLabsImg from '../media/images/sponsors/luizaLabs.jpg';
import concreteImg from '../media/images/sponsors/concrete.png';
import rungImg from '../media/images/sponsors/rung.jpg';
import movileImg from '../media/images/sponsors/movile.jpg';
import hiplatformImg from '../media/images/sponsors/hiplatform.png';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 200,
    height: 75,
    '@media(min-width: 721px)': {
      '> .secondary': {
        height: 100,
      },
      height: 150,
    },
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> a > img': {
      '.secondary': {
        maxWidth: 120,
        maxHeight: 60,
      },
      maxWidth: 150,
      maxHeight: 75,
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

const Supporters = [
  {
    id: 10,
    name: 'Concrete',
    avatar: concreteImg,
    link: 'http://concrete.com.br',
  },
  {
    id: 11,
    name: 'Rung',
    avatar: rungImg,
    link: 'https://www.rung.com.br/',
  },
  {
    id: 8,
    name: 'Luiza Labs',
    avatar: luizaLabsImg,
    link: 'http://luizalabs.com',
  },
  {
    id: 12,
    name: 'Movile',
    avatar: movileImg,
    link: 'https://www.movile.com/',
  },
];

const SecondarySupporters = [
  {
    id: 6,
    name: 'Rivendel',
    avatar: rivendelImg,
    link: 'https://rivendel.com.br/',
  },
  {
    id: 7,
    name: 'Greenmile',
    avatar: greenmileImg,
    link: 'http://greenmile.com/pt/greenmile/',
  },
  {
    id: 9,
    name: 'Stq Advertising',
    avatar: stqImg,
    link: 'https://stqpublicidade.com.br/',
  },
  {
    id: 13,
    name: 'Hi Platform',
    avatar: hiplatformImg,
    link: 'https://hiplatform.com/',
  },
];

class TextSupporters extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Apoio" reverse />

        <div {...styles.cards}>
          {Supporters.map(sponsor => {
            return (
              <div key={sponsor.id} {...styles.card}>
                <a
                  href={
                    sponsor.link +
                    '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                  }
                  title={sponsor.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={sponsor.avatar} alt={sponsor.name} />
                </a>
              </div>
            );
          })}
        </div>

        <div {...styles.cards}>
          {SecondarySupporters.map(secondarySponsor => {
            return (
              <div key={secondarySponsor.id} {...styles.card}>
                <a
                  href={
                    secondarySponsor.link +
                    '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                  }
                  title={secondarySponsor.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={secondarySponsor.avatar}
                    alt={secondarySponsor.name}
                    className="secondary"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSupporters;
