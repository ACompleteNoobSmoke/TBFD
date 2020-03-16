import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import { Link } from "react-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/returningusers", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div
        className="base-container"
        ref={this.props.containerRef}
        onSubmit={this.registerHandler}>
        <div className="header">Login</div>
        <form>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
