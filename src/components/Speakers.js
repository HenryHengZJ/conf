import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

//import pedroNauckImg from '../media/images/speakers/pedroNauck.jpeg';
import LarissaImg from '../media/images/speakers/Larissa.jpg';
import NicholasImg from '../media/images/speakers/Nicholas.jpg';
import MariaImg from '../media/images/speakers/Maria.jpeg';
import MarceloImg from '../media/images/speakers/Marcelo.jpeg';
import ytIcon from '../media/icons/ytIcon.png';

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
    margin: '10px 10px 4em',
    '@media(min-width: 720px)': {
      margin: '10px 10px 1em',
    },
    '> a': {
      overflow: 'hidden',
      textDecoration: 'none',
    },
    '> img': {
      opacity: 0.5,
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

export const speakers = [
  // {
  //   id: 7,
  //   name: 'Pedro Nauck',
  //   theme: '',
  //   origin: 'Florianópolis, SC',
  //   github: 'https://github.com/pedronauck',
  //   avatar: pedroNauckImg,
  //   worksIn: 'One Market',
  //   worksLink: 'https://www.onemarket.com.br/',
  // },
  {
    id: 8,
    name: 'Larissa Farias',
    theme: 'TypeScript vs Flow no segundo semestre de 2018',
    origin: 'Joinville, SC',
    ytURL: 'https://www.youtube.com/watch?v=8fUVjPiwMIA',
    avatar: LarissaImg,
    worksIn: 'VanHack',
    worksLink: 'http://www.vanhack.com/',
    github: 'https://github.com/larissathasdefar/',
  },
  {
    id: 9,
    name: 'Marcelo Camargo',
    theme: 'ReasonML levado a sério',
    origin: 'Joinville, SC',
    ytURL: 'https://www.youtube.com/watch?v=8fUVjPiwMIA',
    avatar: MarceloImg,
    worksIn: 'Rung',
    worksLink: 'https://app.rung.com.br/',
    github: 'https://github.com/haskellcamargo',
  },
  {
    id: 10,
    name: 'Maria Clara',
    theme: 'React nas trincheiras: Erros cometidos e lições aprendidas',
    origin: 'Maceió, AL',
    ytURL: 'https://www.youtube.com/watch?v=Ywmah8gMtYE',
    avatar: MariaImg,
    worksIn: 'Picter',
    worksLink: 'https://www.picter.com/',
    github: 'https://github.com/olarclara/',
  },
  {
    id: 11,
    name: 'Nicholas Eduardo',
    theme: 'Como escalar projetos React com Monorepo',
    origin: 'Florianópolis, SC',
    ytURL: 'https://www.youtube.com/watch?v=fzvmz0aUw14',
    avatar: NicholasImg,
    worksIn: 'Dooile',
    worksLink: 'http://www.dooile.com/',
    github: 'https://github.com/nicholasess',
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Palestrantes" reverse />
        <div {...styles.cards}>
          {speakers.map(speaker => {
            return (
              <div key={speaker.id} {...styles.card}>
                <a
                  href={speaker.ytURL}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="notranslate"
                  {...css({
                    backgroundImage: `url('${speaker.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 300,
                    display: 'block',
                    borderRadius: 4,
                    filter: 'grayscale(100%)',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      '> img': {
                        opacity: 1,
                      },
                    },
                  })}
                >
                  <img
                    alt="youtube"
                    src={ytIcon}
                    height="80px"
                    {...css({ opacity: 0.5 })}
                  />
                </a>
                <h3 {...styles.name}>
                  <a
                    href={speaker.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="notranslate"
                  >
                    {speaker.name}
                  </a>
                </h3>
                <p {...styles.locale}>
                  <a
                    href={speaker.worksLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="notranslate"
                  >
                    @{speaker.worksIn}
                  </a>
                  {' / '}
                  {speaker.origin}
                </p>
                <h4 {...styles.theme} className="notranslate">
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
