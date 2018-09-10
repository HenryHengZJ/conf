import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.white,
    padding: '10px 22px',
    background: Globals.colors.lightGray,
    border: `1px solid ${Globals.colors.transparent}`,
    borderRadius: 4,
    borderColor: 'transparent',
    cursor: 'default',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    /*':hover': {
      backgroundColor: Globals.colors.transparent,
      border: `1px solid ${Globals.colors.primary}`,
      color: Globals.colors.primary,
    },*/

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
      fontSize: '20px',
    },
  }),
};

class TextSC4P extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="CALL FOR PAPERS" /*subtitle="SEJA UM PALESTRANTE"*/>
          {/*  <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >*/}
          <b {...styles.link}>Submissões encerradas</b>
          {/*</a>*/}
        </Text>
      </div>
    );
  }
}

export default TextSC4P;
