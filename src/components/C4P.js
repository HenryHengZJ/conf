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
    background: Globals.colors.lighterGray,
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'transparent',
    cursor: 'default',
    textTransform: 'lowercase',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

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
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >
            <b>Encerrado</b>
          </a>
        </Text>
      </div>
    );
  }
}

export default TextSC4P;
