import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.secondary,
    width: '100vw',
    display: 'flex',
    color: Globals.colors.white,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    border: `1px solid ${Globals.colors.transparent}`,
    padding: '10px 0',
    width: '80%',
    maxWidth: 400,
    fontSize: 22,
    display: 'inline-block',
    fontWeight: 'lighter',
    margin: '0 auto 2em auto',
    background: Globals.colors.main,
    cursor: 'pointer',
    borderRadius: 4,
    textDecoration: 'none',
    ':not(.is-disabled):hover': {
      backgroundColor: Globals.colors.transparent,
      border: `1px solid ${Globals.colors.main}`,
      color: Globals.colors.main,
    },
    '&.is-disabled': {
      backgroundColor: Globals.colors.gray,
      color: Globals.colors.lightGray,
      cursor: 'initial',
    },
    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
    },
  }),
};

class TextBuyIngressos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="20 Outubro 2018" subtitle="Sábado, das 7h30 às 18h">
          <br />
          <a
            href="#"
            target="_blank"
            className="is-disabled"
            rel="noopener noreferrer"
            {...styles.link}
          >
            Ingressos esgotados!
          </a>
        </Text>
      </div>
    );
  }
}

export default TextBuyIngressos;
