import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

//import Text from './Text';

/*import tallerImg from '../media/images/sponsors/taller.jpg';
import quantoImg from '../media/images/sponsors/quanto.jpg';
import fullcircleImg from '../media/images/sponsors/fullcircle.jpg';
import globoImg from '../media/images/sponsors/globo.jpg';
import pipefyImg from '../media/images/sponsors/pipefy.jpg';
import apolloImg from '../media/images/sponsors/apollo.jpg';
import meteorImg from '../media/images/sponsors/meteor.jpg';
import cubosImg from '../media/images/sponsors/cubos.png';
import udacityImg from '../media/images/sponsors/udacity.png';
import entriaImg from '../media/images/sponsors/entria.png';
import segwareImg from '../media/images/sponsors/segware.png';*/

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
      '.pleno': {
        maxWidth: 300,
        maxHeight: 100,
        paddingTop: 50,
      },
      '.junior': {
        maxWidth: 200,
        maxHeight: 100,
        paddingTop: 30,
      },
      maxWidth: 150,
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

const Senior = [];

const Plenos = [];

/*const Plenos2017 = [
  {
    id: 1,
    name: 'Pipefy',
    avatar: pipefyImg,
    link: 'https://www.pipefy.com',
  },
];*/

const Juniors = [];

/*const Juniors2017 = [
  {
    id: 2,
    name: 'Globo.com',
    avatar: globoImg,
    link: 'http://www.globo.com',
  },
];*/

const Padawans = [];

/*const Padawans2017 = [
  {
    id: 1,
    name: 'Meteor',
    avatar: meteorImg,
    link: 'https://www.meteor.com/',
  },
  {
    id: 2,
    name: 'Apollo',
    avatar: apolloImg,
    link: 'https://www.apollodata.com/',
  },
  {
    id: 3,
    name: 'Taller',
    avatar: tallerImg,
    link: 'https://taller.net.br',
  },
  {
    id: 6,
    name: 'Cubos',
    avatar: cubosImg,
    link: 'http://cubos.io',
  },
  {
    id: 7,
    name: 'Udacity',
    avatar: udacityImg,
    link: 'https://br.udacity.com/',
  },
  {
    id: 8,
    name: 'Entria',
    avatar: entriaImg,
    link: 'http://entria.com.br',
  },
  {
    id: 4,
    name: 'Quanto',
    avatar: quantoImg,
    link: 'http://contaquanto.com.br',
  },
  {
    id: 5,
    name: 'Fullcircle',
    avatar: fullcircleImg,
    link: 'http://fullcircle.com.br',
  },
  {
    id: 9,
    name: 'Segware',
    avatar: segwareImg,
    link: 'http://www.segware.com.br/',
  },
];*/

class TextSponsor extends PureComponent {
  render() {
    if (Plenos.length && Senior.length && Juniors.lenght && Padawans.length) {
      return (
        <div {...styles.container}>
          {/*Senior &&
            Senior.length &&
            Plenos &&
            Plenos.length &&
            Juniors &&
            Juniors.length &&
            Padawans &&
            Padawans.length &&
            <Text title="Patrocínio" reverse />*/}
          <div {...styles.cards}>
            {Plenos.map(pleno => {
              return (
                <div key={pleno.id} {...styles.card}>
                  <a
                    href={
                      pleno.link +
                      '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pleno.avatar}
                      alt={pleno.name}
                      className="pleno"
                    />
                  </a>
                </div>
              );
            })}
          </div>

          <div {...styles.cards}>
            {Juniors.map(junior => {
              return (
                <div key={junior.id} {...styles.card}>
                  <a
                    href={
                      junior.link +
                      '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={junior.avatar}
                      alt={junior.name}
                      className="junior"
                    />
                  </a>
                </div>
              );
            })}
          </div>

          <div {...styles.cards}>
            {Padawans.map(padawan => {
              return (
                <div key={padawan.id} {...styles.card}>
                  <a
                    href={
                      padawan.link +
                      '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={padawan.avatar} alt={padawan.name} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

export default TextSponsor;
