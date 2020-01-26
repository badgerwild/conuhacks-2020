import React, { Component } from "react";
import { Shellbar } from 'fundamental-react/Shellbar';

class NavBar extends Component {
  render() {
    return <Shellbar
    logo={<img alt="SAP" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"/>}
    productTitle="Fun Learning Tool"
    productSwitcher={{
      callback: function S(){},
      glyph: 'grid',
      label: 'Product Switcher'
    }}
    productSwitcherList={[
      {
        callback: function S(){},
        glyph: 'home',
        size: 's',
        logoSAP: 'true',
        title: 'Login'
      },
      {
        callback: function S(){},
        glyph: 'sap-icon--credit-card',
        size: 's',
        logoSAP: 'true',
        title: 'Minigame 1',
        onclick: ReactDOM.render(<NavBar />,<FlashCard />, document.getElementById('root'))
      },
      {
        callback: function S(){},
        glyph: 'business-objects-experience',
        size: 's',
        logoSAP: 'true',
        title: 'Analytics Cloud'
      },
      {
        callback: function S(){},
        glyph: 'activate',
        size: 's',
        logoSAP: 'true',
        title: 'Ariba'
      },
    ]}
  />;
  }
}

export default NavBar;
