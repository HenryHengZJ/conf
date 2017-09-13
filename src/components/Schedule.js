import React from 'react';
import { css } from 'glamor';

import { speakers as speakersList } from './Speakers';
import Text from './Text';

const styles = {
  container: css({
    background: '#fff',
    width: '100%',
    paddingBottom: '2em',
  }),
  list: css({
    listStyle: 'none',
    padding: 0,
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
    title: 'Credenciamento',
    time: '8:00 am',
  },
  {
    title: 'Welcome Coffee',
    time: '8:30 am',
  },
  {
    title: 'Abertura',
    time: '9:00 am',
  },
  {
    title: 'Christiano Milfont e Kete Rufino',
    description: 'From a legacy front end to a React SPA',
    time: '9:10 am',
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
  </section>;

export default Schedule;
