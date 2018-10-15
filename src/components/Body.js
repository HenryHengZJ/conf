import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Event from './Event';
import Venue from './Venue';
import Park from './Park';
import Speakers from './Speakers';
//import Schedule from './Schedule';
import TextSC4P from './C4P';
import TextSponsor from './Sponsor';
import Supporters from './Supporters';
import Promotions from './Promotions';
import BuyIngressos from './BuyIngressos';
import Contact from './Contact';
import Meetup from './Meetup';
//import AfterParty from './AfterParty';
import BeSponsor from './BeSponsor';

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
        <Park />
        <Speakers />
        {/*<Schedule />*/}
        <TextSC4P />
        <TextSponsor />
        <BeSponsor />
        <Supporters />
        <Promotions />
        {/*<AfterParty />*/}
        <Meetup />
        <BuyIngressos />
        <Contact />
      </div>
    );
  }
}

export default App;
