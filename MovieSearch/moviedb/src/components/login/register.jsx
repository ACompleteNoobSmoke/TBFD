import React from "react";
import axios from "axios";
import { Link } from "react-dom";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
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
      .post("/newusers", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { firstname, lastname, email, username, password } = this.state;
    return (
      <div
        className="base-container"
        ref={this.props.containerRef}
        onSubmit={this.registerHandler}>
        <div className="header">Register</div>
        <form>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="firstname"
                  value={firstname}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  value={lastname}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.changeHandler}
                />
              </div>
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
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
