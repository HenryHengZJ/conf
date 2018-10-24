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
import GuilhermeJaburImg from '../media/images/speakers/guilhermeJabur.jpg';
import LuizCamargoImg from '../media/images/speakers/luizCamargo.png';
import da2kImg from '../media/images/speakers/da2k.jpg';
import sibeliusImg from '../media/images/speakers/sibelius.jpg';
import matheusImg from '../media/images/speakers/matheus.jpg';
import renatoImg from '../media/images/speakers/renato.jpeg';
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
    fontSize: '1.7em',
    color: Globals.colors.primary,
    fontWeight: 'light',
    margin: '0.66em 0 0.15em 0',
    lineHeight: 1,
    '> a': {
      textDecoration: 'none',
      color: '#222',
    },
    '@media(max-width: 720px)': {
      fontSize: '1.9em',
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
    '> a::after': {
      fontWeight: 'lighter',
      content: ' / ',
    },
  }),
  theme: css({
    fontSize: '1.2em',
    color: Globals.colors.subheader,
    margin: '0 0 0.33em 0',
    fontWeight: 'lighter',
    '@media(max-width: 720px)': {
      fontSize: '1.4em',
    },
    '> a': {
      color: Globals.colors.subheader,
      textDecoration: 'none',
    },
    '> a:hover': {
      color: Globals.colors.subheader,
      textDecoration: 'underline',
    },
  }),
  card: css({
    width: 230,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: '10px 10px 4em',
    '@media(min-width: 720px)': {
      margin: '10px 10px 1em',
    },
    '@media(max-width: 720px)': {
      width: 300,
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
    id: 1,
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
    id: 2,
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
    id: 3,
    name: 'Guilherme Varandas',
    theme:
      'React Native no Banco do Brasil: Como RN nos faz poupar 1500 horas por projeto',
    talk:
      'https://www.icloud.com/keynote/0zIJ9Nrzh5ELy-X1ZuzaJKKoQ#ReactConfBR_-_GAM',
    origin: 'Brasília, DF',
    github: 'https://github.com/gvarandas',
    avatar: GuilhermeVarandasImg,
    worksIn: 'Banco do Brasil',
    worksLink: 'https://www.bb.com.br',
    ytURL: 'https://www.youtube.com/watch?v=5KL-6FkJvMw',
  },
  {
    id: 4,
    name: 'Bruno da Hora',
    theme: 'Otimize seu bundle com Webpack 4 e Create React App',
    talk: 'http://bit.ly/react_conf_brunodahora',
    origin: 'Curitiba, PR',
    github: 'https://github.com/brunodahora',
    avatar: BrunoDahoraImg,
    worksIn: 'Pipefy',
    worksLink: 'https://www.pipefy.com/',
    ytURL: 'https://www.youtube.com/watch?v=Hg_e7LX3VZo',
  },
  {
    id: 5,
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
    id: 6,
    name: 'Nicholas Eduardo',
    theme: 'Como escalar projetos React com Monorepo',
    talk:
      'https://docs.google.com/presentation/d/1jzNwlew9qy9czg34PCOy3z4lKw4KofLZSnbHulXe9E0/edit?usp=sharing',
    origin: 'Florianópolis, SC',
    ytURL: 'https://www.youtube.com/watch?v=fzvmz0aUw14',
    avatar: NicholasImg,
    worksIn: 'Dooile',
    worksLink: 'http://www.dooile.com/',
    github: 'https://github.com/nicholasess',
  },
  {
    id: 7,
    name: 'Larissa Farias',
    theme: 'TypeScript vs Flow no segundo semestre de 2018',
    talk: 'https://slides.com/larissathaisdefarias/typescript-vs-flow/',
    origin: 'Joinville, SC',
    ytURL: 'https://www.youtube.com/watch?v=8fUVjPiwMIA',
    avatar: LarissaImg,
    worksIn: 'VanHack',
    worksLink: 'http://www.vanhack.com/',
    github: 'https://github.com/larissathasdefar/',
  },
  {
    id: 8,
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
    id: 9,
    name: 'Raphael Porto',
    theme: 'A Jornada do React Native na Globo.com',
    talk:
      'https://speakerdeck.com/raphaelpor/a-jornada-do-react-native-na-globo-dot-com',
    origin: 'Rio de Janeiro, RJ',
    github: 'https://github.com/raphaelpor',
    avatar: RaphaelPortoImg,
    worksIn: 'Globo.com',
    worksLink: 'https://www.globo.com/',
    ytURL: 'https://www.youtube.com/watch?v=L16Wp-dS-HY',
  },
  {
    id: 10,
    name: 'Hugo Bessa',
    theme: 'Mantendo WebApps em produção sem dor de cabeça',
    talk:
      'https://speakerdeck.com/hugobessaa/mantendo-webapps-em-producao-sem-dor-de-cabeca',
    origin: 'Santos, SP',
    github: 'https://github.com/hugobessaa',
    avatar: HugoBessaImg,
    worksIn: 'Telnyx',
    worksLink: 'https://www.telnyx.com/',
    ytURL: 'https://youtu.be/EMD6OEyySRQ',
  },
  {
    id: 11,
    name: 'Guilherme Jabur',
    theme: 'Animações com React Native',
    origin: 'Florianópolis, SC',
    github: 'https://github.com/jaburcodes',
    avatar: GuilhermeJaburImg,
    worksIn: '',
    worksLink: '',
    ytURL: 'https://youtu.be/kMaODEf4DVA',
  },
  {
    id: 12,
    name: 'Luiz Camargo',
    theme:
      'Uma experiência open-source com React Native, GraphQL e Relay Modern',
    origin: 'São Paulo, SP',
    github: 'https://github.com/lXSPandora',
    avatar: LuizCamargoImg,
    worksIn: 'Popstand',
    worksLink: 'https://www.popstand.com',
    ytURL: 'https://youtu.be/Zt6NDC5wdFo',
  },
  {
    id: 13,
    name: 'Renato Benkendorf',
    theme: 'Modeling GraphQL APIs',
    talk: 'https://speakerdeck.com/renatobenks/modeling-graphql-apis',
    origin: 'São Paulo, SP',
    github: 'https://github.com/renatobenks',
    avatar: renatoImg,
    worksIn: 'Creditas',
    worksLink: 'https://www.creditas.com.br',
    ytURL: 'https://youtu.be/icnLv0sj2BY',
  },
  {
    id: 14,
    name: 'Fernando Daciuk',
    theme: 'O poder do SSR',
    talk:
      'https://docs.google.com/presentation/d/1lY5u-TeYDVdg4rfd5uWub2EYC8QHNqbvnbtYOIQg_qs/present',
    origin: 'Curitiba, PR',
    github: 'https://github.com/fdaciuk',
    avatar: da2kImg,
    worksIn: 'queroser.ninja',
    worksLink: ' https://queroser.ninja',
    ytURL: 'https://youtu.be/ZHpVZYnGx6s',
  },
  {
    id: 15,
    name: 'Sibelius Seraphini',
    theme: 'Deferred rendering e fetching com GraphQL e React',
    talk: 'https://speakerdeck.com/sibelius/the-frontend-dichotomy',
    origin: 'São Paulo, SP',
    github: 'https://github.com/sibelius',
    avatar: sibeliusImg,
    worksIn: 'Feedback House',
    worksLink: 'https://feedback.house',
    ytURL: 'https://youtu.be/4YjT7-ZcDtI',
  },
  {
    id: 16,
    name: 'Matheus Marsiglio',
    theme:
      'Meu próprio conjunto de regras para viver uma vida longa com state containers',
    talk:
      'https://www.icloud.com/keynote/0LZmoTka2s8xuTKJsEkUrniBA#happy-and-long-life-with-state-containers-pt',
    origin: 'São Paulo, SP',
    github: 'https://github.com/mtmr0x',
    avatar: matheusImg,
    worksIn: '',
    worksLink: '',
    ytURL: 'https://youtu.be/jzW2WEzW0U8',
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
                    height: 230,
                    display: 'block',
                    borderRadius: 4,
                    filter: 'grayscale(100%)',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      '> img': {
                        opacity: 1,
                      },
                    },
                    '@media(max-width: 720px)': {
                      height: 300,
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
                  {speaker.worksIn &&
                    speaker.worksIn.length &&
                    <a
                      href={speaker.worksLink}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="notranslate"
                    >
                      @{speaker.worksIn}
                    </a>}
                  {speaker.origin}
                </p>
                {speaker.talk &&
                  <h4 {...styles.theme} className="notranslate">
                    <a href={speaker.talk}>
                      {speaker.theme}
                    </a>
                  </h4>}
                {!speaker.talk &&
                  <h4 {...styles.theme} className="notranslate">
                    {speaker.theme}
                  </h4>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSpeakers;
