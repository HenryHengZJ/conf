import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Event from './Event';
import Venue from './Venue';
import Speakers from './Speakers';
import Sponsor from './Sponsor';
import Supporters from './Supporters';
import BuyIngressos from './BuyIngressos';
import Contact from './Contact';
import Meetup from './Meetup';

const styles = {
  container: css({
    display: 'flex',
    background: Globals.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Event />
        <Venue />
        <Speakers />
        <BuyIngressos />
        <Sponsor />
        <Supporters />
        <Meetup />
        <Contact />
      </div>
    );
  }
}

export default App;
