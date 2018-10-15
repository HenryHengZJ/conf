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
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  small: css({
    display: 'block',
  }),
  boldText: css({
    fontSize: '1.6em',
  }),
  colorBlue: css({
    color: Globals.colors.main,
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
        <Text
          {...styles.colorBlue}
          title="Estacionamento"
          subtitle="Estacione em nosso Parceiro"
        >
          <p>
            <b {...styles.boldText}>PantaPark - R$15,00 das 6:30h às 23:00h</b>
            <br />
            Av. Brigadeiro Luis Antônio, 759 - 1º subsolo, Bela Vista.
            <br />
            Telefone: (11) 3105-6492
          </p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://goo.gl/maps/pbkK6tW4UbJ2"
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
