import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import dneImg from '../media/images/sponsors/dne.jpg';
import codamosImg from '../media/images/sponsors/codamos.jpg';
import jsladiesImg from '../media/images/sponsors/jsladies.jpg';
import nodebrImg from '../media/images/sponsors/nodebr.jpg';
import trainingcenterImg from '../media/images/sponsors/trainingcenter.jpg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  sponsorbtn: css({
    color: Globals.colors.background,
    fontSize: 20,
    textAlign: 'center',
    maxWidth: 200,
    borderRadius: 20,
    padding: '10px 20px',
    backgroundColor: Globals.colors.main,
    display: 'block',
    margin: '3em auto',
    textDecoration: 'none',
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 150,
    height: 75,
    '@media(min-width: 721px)': {
      height: 150,
    },
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> a > img': {
      maxWidth: 120,
      maxHeight: 55,
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

const Promotions = [
  {
    id: 8,
    name: 'DevNaEstrada',
    avatar: dneImg,
    link: 'http://devnaestrada.com.br/',
  },
  {
    id: 10,
    name: 'codamos',
    avatar: codamosImg,
    link: 'http://www.codamos.club/',
  },
  {
    id: 11,
    name: 'jsladies',
    avatar: jsladiesImg,
    link: 'https://github.com/jsladiesbr',
  },
  {
    id: 12,
    name: 'NodeBR',
    avatar: nodebrImg,
    link: 'https://github.com/nodebr',
  },
  {
    id: 13,
    name: 'Training Center',
    avatar: trainingcenterImg,
    link: 'https://github.com/training-center',
  },
];

class TextPromotions extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Promoção" reverse />
        <div {...styles.cards}>
          {Promotions.map(promotion => {
            return (
              <div key={promotion.id} {...styles.card}>
                <a
                  href={
                    promotion.link +
                    '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                  }
                  title={promotion.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={promotion.avatar} alt={promotion.name} />
                </a>
              </div>
            );
          })}
        </div>
        <p>
          <a
            {...styles.sponsorbtn}
            href="mailto:reactconfbr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seja um patrocinador
          </a>
        </p>
      </div>
    );
  }
}

export default TextPromotions;
