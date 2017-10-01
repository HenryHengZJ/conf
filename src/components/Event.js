import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import imgEvent from '../media/images/reactconfbr-event.jpg';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 1224px)': {
      alignSelf: 'auto',
    },
  }),
  imgContainer: css({
    width: '100%',
    '@media(min-width: 1224px)': {
      width: '50%',
      display: 'flex ',
      float: 'left',
      padding: '1em',
      margin: '3em 0 3em 0',
      border: '1px solid lightgray',
    },
    '> img': {
      maxWidth: '100%',
      margin: '0 auto',
      objectFit: 'cover',
    },
    display: 'flex ',
    margin: '0 auto',
  }),
  textContainer: css({
    display: 'flex',
    '@media(min-width:1224px)': {
      padding: '5em 3em',
      display: 'flex',
      lineHeight: 2,
      textAlign: 'left',
    },
  }),
};

class TextPitch extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="A conferência">
          <h3 lang="en" className="notranslate">
            Bleeding Edge Web Development
          </h3>
          <div />
          <div {...styles.imgContainer}>
            <img src={imgEvent} alt="Meetup React SP na Pagar.me" />
          </div>
          <p {...styles.textContainer}>{Globals.event.text}</p>
        </Text>
      </div>
    );
  }
}

export default TextPitch;
