/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./LoginPage";
import { Shellbar } from "fundamental-react/Shellbar";
import axios from "axios";
class PageSwitcher extends Component {
  render() {
    return (
      <Router>
        <div>
          <Shellbar
            logo={
              <img
                alt="SAP"
                src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
              />
            }
            productTitle="Helper"
            profile={{
              colorAccent: 8,
              initials: "JS",
              userName: "John Snow"
            }}
            profileMenu={[
              {
                callback: function S() {},
                glyph: "log",
                name: "Sign Out",
                size: "s"
              }
            ]}
          />
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PageSwitcher;
