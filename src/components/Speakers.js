import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import PedroNauckImg from '../media/images/speakers/pedroNauck.jpg';
import LarissaImg from '../media/images/speakers/Larissa.jpg';
import NicholasImg from '../media/images/speakers/Nicholas.jpg';
import MariaImg from '../media/images/speakers/Maria.jpeg';
import MarceloImg from '../media/images/speakers/Marcelo.jpeg';
import BrunoDahoraImg from '../media/images/speakers/brunoDahora.jpg';
import GuilhermeVarandasImg from '../media/images/speakers/guilhermeVarandas.jpg';
import RaphaelPortoImg from '../media/images/speakers/raphaelPorto.jpg';
import RaphaelAmorimImg from '../media/images/speakers/raphaelAmorim.jpg';
import HugoBessaImg from '../media/images/speakers/hugoBessa.jpg';
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
    id: 13,
    name: 'Pedro Nauck',
    theme: 'Docz: de 0 a 5.000 ⭐️ em 2 semanas',
    origin: 'Florianópolis, SC',
    github: 'https://github.com/pedronauck',
    avatar: PedroNauckImg,
    worksIn: 'Docz',
    worksLink: 'https://www.docz.site/',
    ytURL: 'https://www.youtube.com/watch?v=NqcEZZqZ7xQ',
  },
  {
    id: 7,
    name: 'Guilherme Varandas',
    theme:
      'React Native no Banco do Brasil: Como RN nós faz poupar 1500 horas por projeto',
    origin: 'Brasília, DF',
    github: 'https://github.com/gvarandas',
    avatar: GuilhermeVarandasImg,
    worksIn: 'Banco do Brasil',
    worksLink: 'https://www.bb.com.br',
    ytURL: 'https://www.youtube.com/watch?v=5KL-6FkJvMw',
  },
  {
    id: 6,
    name: 'Bruno da Hora',
    theme: 'Otimize seu bundle com Webpack 4 e Create React App',
    origin: 'Curitiba, PR',
    github: 'https://github.com/brunodahora',
    avatar: BrunoDahoraImg,
    worksIn: 'Pipefy',
    worksLink: 'https://www.pipefy.com/',
    ytURL: 'https://www.youtube.com/watch?v=Hg_e7LX3VZo',
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
    id: 12,
    name: 'Nicholas Eduardo',
    theme: 'Como escalar projetos React com Monorepo',
    origin: 'Florianópolis, SC',
    ytURL: 'https://www.youtube.com/watch?v=fzvmz0aUw14',
    avatar: NicholasImg,
    worksIn: 'Dooile',
    worksLink: 'http://www.dooile.com/',
    github: 'https://github.com/nicholasess',
  },
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
    id: 14,
    name: 'Raphael Amorim',
    theme: 'Escrevendo seu próprio React Render',
    origin: 'Rio de Janeiro, RJ',
    github: 'https://github.com/raphamorim',
    avatar: RaphaelAmorimImg,
    worksIn: 'GoDaddy',
    worksLink: 'https://www.godaddy.com/',
    ytURL: 'https://youtu.be/ADFHQ-I9Scg',
  },
  {
    id: 15,
    name: 'Raphael Porto',
    theme: 'A Jornada do React Native na Globo.com',
    origin: 'Rio de Janeiro, RJ',
    github: 'https://github.com/raphaelpor',
    avatar: RaphaelPortoImg,
    worksIn: 'Globo.com',
    worksLink: 'https://www.globo.com/',
    ytURL: 'https://www.youtube.com/watch?v=L16Wp-dS-HY',
  },
  {
    id: 16,
    name: 'Hugo Bessa',
    theme: 'Mantendo WebApps em produção sem dor de cabeça',
    origin: 'Santos, SP',
    github: 'https://twitter.com/hugobessaa',
    avatar: HugoBessaImg,
    worksIn: 'Telnyx',
    worksLink: 'https://www.telnyx.com/',
    ytURL: 'https://youtu.be/EMD6OEyySRQ',
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
