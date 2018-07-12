import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgAugusta from '../media/images/theater-augusta.png';
import imgEvents from '../media/images/events.png';
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
  mediumBtn: css({
    color: Globals.colors.background,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 360,
    borderRadius: 20,
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
            {Globals.event.locale}
          </p>
          <p>
            <br />
            No coração de São Paulo, o histórico Teatro Brigadeiro será o palco
            de apresentações únicas.
          </p>
          <img src={imgAugusta} alt="Teatro Augusta" title="Teatro Augusta" />
          <small>Foto: Divulgação</small>
          <p>Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil</p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://goo.gl/maps/UUeBps9pRHT2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://medium.com/reactbrasil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hospedagem e Lazer em São Paulo
            </a>
          </p>
          <p>
            <h4>Economize na hospedagem</h4>
            <img src={imgEvents} alt="Evnts" title="Evnts" {...styles.evnts} />
            <a
              {...styles.mediumBtn}
              href="http://hoteis.evnts.com.br/sp/react-conf-brasil-2017"
              target="_blank"
              rel="noopener noreferrer"
            >
              Encontre os hotéis parceiros da React Conf Brasil 2017 com os
              melhores valores e próximos ao local do evento
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
