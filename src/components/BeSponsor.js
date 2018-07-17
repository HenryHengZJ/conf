import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

//import Text from './Text';

//import englishthingImg from '../media/images/sponsors/englishthing.png';

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
    margin: '4em auto',
    textDecoration: 'none',
  }),
  paragraphAfterParty: css({
    textAlign: 'center',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 250,
    height: 150,
    '@media(min-width: 721px)': {
      height: 100,
    },
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> a > img': {
      maxWidth: 250,
      maxHeight: 150,
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
    margin: '80px auto',
  }),
};

class BeSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
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

export default BeSponsor;
