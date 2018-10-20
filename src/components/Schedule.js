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
    maxWidth: '600px',
    margin: '0 auto',
  }),
  disclaimer: css({
    padding: 0,
    maxWidth: '600px',
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
    title: 'Abertura e Credenciamento',
    time: '7:30 am',
  },
  {
    title: 'Welcome Coffee',
    time: '7:45 am',
  },
  {
    title: 'Abertura React Conf Brasil 2018',
    time: '8:30 am',
  },
  {
    title: 'Parte I',
    time: '8:45 am',
  },
  {
    title: 'Almoço',
    time: '12:00 pm',
  },
  {
    title: 'Abertura da tarde',
    time: '1:10 pm',
  },
  {
    title: 'Parte II',
    time: '1:30 pm',
  },
  {
    title: 'Coffe Break',
    time: '4:30 pm',
  },
  {
    title: 'Desconferência',
    time: '5:00 pm',
  },
  {
    title: 'Encerramento',
    time: '5:40 pm',
  },
  {
    title: 'After Party',
    description:
      'Open Bar (+18) Treze de Maio Show - R. Treze de Maio, 409 - Bela Vista, São Paulo',
    time: '7:00 pm - 10:00 pm',
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
    <Text title="Programação" />
    <ol {...styles.list}>
      {events.map(event => <Event {...event} />)}
    </ol>
    <p {...styles.disclaimer}>Horário sujeito a alteração sem aviso prévio</p>
  </section>;

export default Schedule;
