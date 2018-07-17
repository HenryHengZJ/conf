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
    background: Globals.colors.primary,
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    textTransform: 'lowercase',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    ':hover': {
      backgroundColor: Globals.colors.background,
      border: '1px solid',
      borderColor: Globals.colors.primary,
      color: Globals.colors.lightGray,
    },

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
        <Text title="CALL FOR PAPERS" subtitle="SEJA UM PALESTRANTE">
          <br />
          <a
            href="https://www.papercall.io/reactconfbr2018"
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >
            <b>papercall.io/reactconfbr2018</b>
          </a>
        </Text>
      </div>
    );
  }
}

export default TextSC4P;
