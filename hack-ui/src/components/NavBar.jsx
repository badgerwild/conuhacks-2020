/** @format */

import React, { Component } from "react";
import { Shellbar } from "fundamental-react/Shellbar";
import ReactDOM from "react-dom";
import FlashCard from "./FlashCard";
import LoginPage from "../LoginPage";
import { Icon } from "fundamental-react/Icon";
class NavBar extends Component {
  render() {
    return (
      <Shellbar
        logo={
          <img
            alt="SAP"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
          />
        }
        productTitle="Fun Learning Tool"
        productSwitcher={{
          callback: function S() {},
          glyph: "grid",
          label: "Product Switcher"
        }}
        productSwitcherList={[
          {
            callback: function S() {},
            glyph: "home",
            title: "Login"
          },
          {
            callback: function S() {},
            glyph: "credit-card",
            title: "Minigame 1",
            onclick: <LoginPage />
          },
          {
            callback: function S() {},
            glyph: "business-objects-experience",
            title: "Analytics Cloud"
          },
          {
            callback: function S() {},
            glyph: "activate",
            title: "Ariba"
          }
        ]}
      />
    );
  }
}

export default NavBar;
