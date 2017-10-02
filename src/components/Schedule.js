import React from 'react';
import { css } from 'glamor';
import Text from './Text';

const styles = {
  container: css({
    background: '#fff',
    width: '100vw',
    paddingBottom: '2em',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  list: css({
    listStyle: 'none',
    padding: 0,
    maxWidth: '1000px',
    margin: '0 auto',
  }),
  disclaimer: css({
    padding: 0,
    maxWidth: '1000px',
    margin: '30px auto',
    textAlign: 'right',
  }),
  event: css({
    display: 'flex',
    borderTop: '1px solid #333',
    padding: '1em 0 0.5em',
    justifyContent: 'space-around',
    ' div': {},
    ' h2': {
      margin: '0 0 0.3em 0',
      ' span': {
        fontSize: '0.7em',
      },
    },
    ' h3': {
      fontWeight: 'lighter',
      fontSize: '1.3em',
      margin: 0,
    },
  }),
  time: css({
    fontSize: '1.7em',
    paddingLeft: '1.3em',
    whiteSpace: 'nowrap',
  }),
  desc: css({
    width: '100%',
    padding: '0.2em 1.3em',
  }),
};

const eventsList = [
  {
    title: 'Abertura do Teatro e Credenciamento',
    time: '8:00 am',
  },
  {
    title: 'Welcome Coffee',
    time: '8:30 am',
  },
  {
    title: 'Abertura React Brasil',
    time: '9:00 am',
  },
  {
    title: 'Raphael Amorim',
    description: 'Scratching React Fiber',
    time: '9:10 am',
  },
  {
    title: 'Fernando Daciuk',
    description: 'The magic world of tests with Jest',
    time: '9:40 am',
  },
  {
    title: 'Kete Rufino e Christino Milfont',
    description: 'Transformando um front-end legado em uma React SPA',
    time: '10:10 am',
  },
  {
    title: 'Marcelo Camargo',
    description: "Let's dive into Babel: How everything works",
    time: '10:35 am',
  },
  {
    title: 'James Baxley',
    description: 'Statically Typing your GraphQL App',
    time: '10:55 am',
  },
  {
    title: 'Desconferência: Fishbowl',
    time: '11:30 am',
  },
  {
    title: 'Almoço',
    time: '12:00 pm',
  },
  {
    title: 'Clara Battesini',
    description: 'MobX: The light side of the force',
    time: '1:30 pm',
  },
  {
    title: 'Henrique Sosa',
    description: 'Gorgeous Apps with React Motion and Animations',
    time: '1:40 pm',
  },
  {
    title: 'João Gonçalves',
    description: 'Show do Milhão React PWA (Caso de Sucesso)',
    time: '1:50 pm',
  },
  {
    title: 'Raphael Costa',
    description:
      'Building the Pipefy mobile app in 3 weeks with React Native, GraphQL and Apollo',
    time: '2:00 pm',
  },
  {
    title: 'Sashko Stubailo',
    description: 'The GraphQL and Apollo stack: connecting everything together',
    time: '2:25 pm',
  },
  {
    title: 'Sebastian Ferrari',
    description: 'Why React is good for business',
    time: '3:05 pm',
  },
  {
    title: 'Coffee Break',
    time: '3:30 pm',
  },
  {
    title: 'Matheus Marsiglio',
    description: 'Isomorphic React + Redux App',
    time: '4:00 pm',
  },
  {
    title: 'Matheus Lima',
    description: 'O que tem de Funcional no React',
    time: '4:25 pm',
  },
  {
    title: 'Keuller Magalhães',
    description: 'React Performance from Scratch',
    time: '4:35 pm',
  },
  {
    title: 'Geisy Domiciano',
    description:
      'Continuos Integration / Continuos Deployment com create-react-app',
    time: '4:45 pm',
  },
  {
    title: 'Sibelius Seraphini',
    description: 'Relay Modern',
    time: '4:55 pm',
  },
  {
    title: 'Desconferência: Fishbowl',
    time: '5:15 pm',
  },
  {
    title: 'Sorteios',
    time: '5:45 pm',
  },
  {
    title: 'Encerramento',
    time: '6:00 pm',
  },
  {
    title: 'AfterParty',
    description: 'Mono Club by An English Thing',
    time: '6:30 pm',
  },
];

const Event = ({ title, time, worksIn = false, worksLink, description }) =>
  <li {...styles.event}>
    <div {...styles.time}>
      {time}
    </div>
    <div {...styles.desc}>
      <h2>
        {title}
        {worksIn &&
          <span>
            {worksIn}
          </span>}
      </h2>
      {description &&
        <h3>
          {description}
        </h3>}
    </div>
  </li>;

const Schedule = ({ events = eventsList }) =>
  <section {...styles.container}>
    <Text title="Programa" />
    <ol {...styles.list}>
      {events.map(event => <Event {...event} />)}
    </ol>
    <p {...styles.disclaimer}>Horário sujeito a alteração sem aviso prévio</p>
  </section>;

export default Schedule;
