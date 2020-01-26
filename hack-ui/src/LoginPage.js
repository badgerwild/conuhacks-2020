/** @format */

import React, { Component } from "react";
import { Alert } from "fundamental-react/Alert";
import { Button } from "fundamental-react/Button";
import { Icon } from "fundamental-react/Icon";
import {
  FormGroup,
  FormInput,
  FormItem,
  FormLabel
} from "fundamental-react/Forms";
import { InputGroup } from "fundamental-react/InputGroup";
import "./LoginPage.css";
//import { Shellbar } from "fundamental-react";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && <Alert type="warning">{this.state.error}</Alert>}
          <FormGroup>
            <FormLabel className="formcomp" htmlFor="input-1">
              Username
            </FormLabel>
            <FormItem>
              <InputGroup>
                <InputGroup.Addon>
                  <Icon glyph="person-placeholder" />
                </InputGroup.Addon>
                <FormInput
                  className="formcomp"
                  id="username"
                  placeholder="Enter username here"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUserChange}
                />
              </InputGroup>
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="input-2">Password</FormLabel>
            <FormItem>
              <InputGroup>
                <InputGroup.Addon>
                  <Icon glyph="locked" />
                </InputGroup.Addon>
                <FormInput
                  id="pwd"
                  placeholder="Enter password here"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassChange}
                />
              </InputGroup>
            </FormItem>
          </FormGroup>
          <Button type="submit" data-test="submit">
            Log In
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
