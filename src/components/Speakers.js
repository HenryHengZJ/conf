import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import stubailoImg from '../media/images/speakers/sashko-pb.jpg';
import jbaxleyiiiImg from '../media/images/speakers/jbaxleyiii-pb.jpg';
import sibeliusImg from '../media/images/speakers/sibelius-pb.jpg';
import daciukImg from '../media/images/speakers/daciuk-pb.jpg';
import marsiglioImg from '../media/images/speakers/marsiglio-pb.jpg';
import amorimImg from '../media/images/speakers/amorim-pb.jpg';
import keteImg from '../media/images/speakers/kete-pb.jpg';
import milfontImg from '../media/images/speakers/milfont-pb.jpg';

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
  name: css({
    fontSize: '1.999em',
    color: Globals.colors.primary,
    fontWeight: 'light',
    margin: '0.66em 0 0.15em 0',
    lineHeight: 1,
    '> a': {
      textDecoration: 'none',
      color: '#222',
    },
  }),
  locale: css({
    fontSize: '1em',
    fontWeight: 'lighter',
    margin: '0 0 0.33em 0',
    '> a': {
      textDecoration: 'none',
      color: '#555',
      fontWeight: 'bold',
    },
  }),
  theme: css({
    fontSize: '1.414em',
    color: Globals.colors.subheader,
    margin: '0 0 0.33em 0',
    fontWeight: 'lighter',
  }),
  card: css({
    width: 300,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 20,
    '@media(min-width: 720px)': {
      margin: 10,
    },
    '> a': {
      textIndent: '-9999px',
      overflow: 'hidden',
      textDecoration: 'none',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    margin: '0 auto',
    maxWidth: 1000,
  }),
};

const Speakers = [
  {
    id: 7,
    name: 'Sashko Stubailo',
    theme: 'The GraphQL and Apollo stack: Connecting everything together',
    origin: 'San Francisco, California, EUA',
    github: 'https://github.com/stubailo',
    avatar: stubailoImg,
    worksIn: 'Meteor',
    worksLink: 'https://www.meteor.io/',
  },
  {
    id: 8,
    name: 'James Baxley',
    theme: 'Statically Typing your GraphQL App',
    origin: ' Anderson, South Carolina, EUA',
    github: 'https://github.com/jbaxleyiii',
    avatar: jbaxleyiiiImg,
    worksIn: 'Apollo',
    worksLink: 'https://www.apollodata.com/',
  },
  {
    id: 1,
    name: 'Sibelius Seraphini',
    theme: 'Relay Modern',
    origin: 'São Paulo, Brasil',
    github: 'https://github.com/sibelius',
    avatar: sibeliusImg,
    worksIn: 'Entria',
    worksLink: 'https://www.entria.com.br/',
  },
  {
    id: 2,
    name: 'Matheus Marsiglio',
    theme: 'Isomorphic React + Redux App',
    origin: 'São Paulo, Brasil',
    github: 'https://github.com/mtmr0x',
    avatar: marsiglioImg,
    worksIn: 'Udacity',
    worksLink: 'https://udacity.com/',
  },
  {
    id: 3,
    name: 'Raphael Amorim',
    theme: 'Scratching React Fiber',
    origin: 'Rio de Janeiro, Brasil',
    github: 'https://github.com/raphamorim',
    avatar: amorimImg,
    worksIn: 'Globo.com',
    worksLink: 'http://globo.com/',
  },
  {
    id: 4,
    name: 'Fernando Daciuk',
    theme: 'The Magic World of Tests with Jest',
    origin: 'Curitiba, Brasil',
    github: 'https://github.com/fdaciuk',
    avatar: daciukImg,
    worksIn: 'DA2K',
    worksLink: 'http://da2k.com.br/',
  },
  {
    id: 5,
    name: 'Kete Rufino',
    theme: 'From a legacy front end to a React SPA',
    origin: 'Ceara, Brasil',
    github: 'https://github.com/ketemartinsrufino',
    avatar: keteImg,
    worksIn: 'GreenMile',
    worksLink: 'http://greenmile.com/',
  },
  {
    id: 6,
    name: 'Christiano Milfont',
    theme: 'From a legacy front end to a React SPA',
    origin: 'Ceara, Brasil',
    github: 'https://github.com/cmilfont',
    avatar: milfontImg,
    worksIn: 'Rivendel',
    worksLink: 'https://rivendel.com.br/',
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Palestrantes" reverse />
        <div {...styles.cards}>
          {Speakers.map(speaker => {
            return (
              <div key={speaker.id} {...styles.card}>
                <a
                  href={speaker.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  {...css({
                    backgroundImage: `url('${speaker.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 300,
                    display: 'block',
                    borderRadius: '6px',
                  })}
                >
                  {speaker.name}
                </a>
                <h3 {...styles.name}>
                  <a
                    href={speaker.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {speaker.name}
                  </a>
                </h3>
                <p {...styles.locale}>
                  <a
                    href={speaker.worksLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    @{speaker.worksIn}
                  </a>
                  {' / '}
                  {speaker.origin}
                </p>
                <h4 {...styles.theme}>
                  {speaker.theme}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSpeakers;
