import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgTheater from '../media/images/theater-brigadeiro.jpg';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    color: Globals.colors.white,
    background: Globals.colors.base,
    width: '100vw',
    display: 'flex',
    '> img': {
      maxWidth: '100%',
    },
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  small: css({
    display: 'block',
  }),
  mediumBtn: css({
    color: Globals.colors.background,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 360,
    borderRadius: 4,
    padding: '10px 20px',
    backgroundColor: Globals.colors.white,
    display: 'block',
    margin: '0 auto',
    textDecoration: 'none',
  }),
  evnts: css({
    margin: '0 auto 20px auto',
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Local" subtitle="Teatro Brigadeiro, São Paulo, Brasil">
          <p>
            Uma das mais tradicionais casas de espetáculo de São Paulo será
            palco da 2ª React Conf Brasil
          </p>
          <img
            src={imgTheater}
            alt="Teatro Brigadeiro"
            title="Teatro Brigadeiro"
          />
          <small {...styles.small}>Foto: Divulgação</small>
          <p>Av. Brigadeiro Luís Antônio, 884 - Bela Vista, São Paulo - SP</p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://goo.gl/maps/qmmiig1AYG92"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
