import React, { Component } from "react";
import { Shellbar } from 'fundamental-react/Shellbar';

class NavBar extends Component {
  render() {
    return <Shellbar
    logo={<img alt="SAP" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"/>}
    productTitle="Corporate Portal"
    profile={{
      colorAccent: 8,
      initials: 'JS',
      userName: 'John Snow'
    }}
    profileMenu={[
      {
        callback: function S(){},
        glyph: 'action-settings',
        name: 'Settings',
        size: 's'
      },
      {
        callback: function S(){},
        glyph: 'log',
        name: 'Sign Out',
        size: 's'
      }
    ]}
  />;
  }
}

export default NavBar;
