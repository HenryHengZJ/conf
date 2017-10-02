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
import sosaImg from '../media/images/speakers/sosa-pb.jpg';
import raphaelImg from '../media/images/speakers/raphael-pb.jpg';
import sebasImg from '../media/images/speakers/sebas-pb.jpg';
import claraImg from '../media/images/speakers/clara-pb.jpg';
import matheuslimaImg from '../media/images/speakers/matheuslima-pb.jpg';
import keullerImg from '../media/images/speakers/keuller-pb.jpg';
import haskellImg from '../media/images/speakers/haskell-pb.jpg';
import joaoGoncalvesImg from '../media/images/speakers/joaogoncalves-pb.jpg';
import geisyImg from '../media/images/speakers/geisy-pb.jpg';

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

export const speakers = [
  {
    id: 7,
    name: 'Sashko Stubailo',
    theme: 'The GraphQL and Apollo stack: Connecting everything together',
    origin: 'San Francisco, EUA',
    github: 'https://github.com/stubailo',
    avatar: stubailoImg,
    worksIn: 'Apollo',
    worksLink: 'https://www.apollodata.com/',
  },
  {
    id: 8,
    name: 'James Baxley',
    theme: 'Statically Typing your GraphQL App',
    origin: ' Anderson, EUA',
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
    id: 9,
    name: 'Raphael Costa',
    theme: 'Building the Pipefy mobile app in 3 weeks',
    origin: 'Curitiba, Brasil',
    github: 'https://github.com/raphaelcosta',
    avatar: raphaelImg,
    worksIn: 'Pipefy',
    worksLink: 'http://www.pipefy.com',
  },
  {
    id: 5,
    name: 'Kete Rufino',
    theme: 'Transformando um legado front-end em uma SPA com React',
    origin: 'Fortaleza, Brasil',
    github: 'https://github.com/ketemartinsrufino',
    avatar: keteImg,
    worksIn: 'GreenMile',
    worksLink: 'http://greenmile.com/',
  },
  {
    id: 6,
    name: 'Christiano Milfont',
    theme: 'Transformando um legado front-end em uma SPA com React',
    origin: 'Fortaleza, Brasil',
    github: 'https://github.com/cmilfont',
    avatar: milfontImg,
    worksIn: 'Rivendel',
    worksLink: 'https://rivendel.com.br/',
  },
  {
    id: 10,
    name: 'Sebastian Ferrari',
    theme: 'Why React is good for business',
    origin: 'Montevideo, Uruguai',
    github: 'https://github.com/sebas5384',
    avatar: sebasImg,
    worksIn: 'Taller',
    worksLink: 'http://taller.net.br',
  },
  {
    id: 11,
    name: 'Henrique Sosa',
    theme: 'Gorgeous Apps with React Motion and Animations',
    origin: 'São Paulo, Brasil',
    github: 'https://github.com/henriquesosa',
    avatar: sosaImg,
    worksIn: 'Hi Platform',
    worksLink: 'https://www.hiplatform.com',
  },
  {
    id: 12,
    name: 'Matheus Lima',
    theme: 'O que tem de Funcional no React',
    origin: 'Rio de Janeiro, Brasil',
    github: 'https://github.com/matheusml',
    avatar: matheuslimaImg,
    worksIn: 'Concrete',
    worksLink: 'http://concrete.com.br',
  },
  {
    id: 13,
    name: 'Clara Battesini',
    theme: 'MobX: The light side of the force',
    origin: 'Salvador, Brasil',
    github: 'https://github.com/clarabatt',
    avatar: claraImg,
    worksIn: 'Cubos',
    worksLink: 'http://cubos.io',
  },
  {
    id: 14,
    name: 'Keuller Magalhães',
    theme: 'React Performance from Scratch',
    origin: 'Belém, Brasil',
    github: 'https://github.com/keuller',
    avatar: keullerImg,
    worksIn: 'PagSeguro',
    worksLink: 'https://pagseguro.uol.com.br',
  },
  {
    id: 15,
    name: 'Marcelo Camargo',
    theme: "Let's dive into Babel: How everything works",
    origin: 'Joinville, Brasil',
    github: 'https://github.com/haskellcamargo',
    avatar: haskellImg,
    worksIn: 'Rung',
    worksLink: 'https://app.rung.com.br/',
  },
  {
    id: 16,
    name: 'João Gonçalves',
    theme: 'Show do Milhão React PWA (Caso de Sucesso)',
    origin: 'Campinas, Brasil',
    github: 'https://github.com/joao-goncalves-movile',
    avatar: joaoGoncalvesImg,
    worksIn: 'Movile',
    worksLink: 'https://www.movile.com/#/',
  },
  {
    id: 17,
    name: 'Geisy Domiciano',
    theme: 'Continuous Integration/Continuous Deployment com create-react-app',
    origin: 'Diadema, Brasil',
    github: 'https://github.com/gdomiciano',
    avatar: geisyImg,
    worksIn: 'Polishop',
    worksLink: 'http://www.polishop.com.br/',
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
                  href={speaker.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="notranslate"
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
