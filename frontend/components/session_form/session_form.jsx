import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentWillUnmount() {
    this.props.clearErrors();
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  // Press Escape to Close Form
  handleKeyUp(e) {
    const { closeModal, processForm } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        closeModal();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: "demo@rtsy.com",
      firstname: "Demo User",
      password: "demodemo",
    };
    this.props.login(demoUser).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  renderHeader() {
    if (this.props.formType === "login") {
      return (
        <div className="login-header">
          <div className="form-type">Sign In</div>
          {this.props.otherForm}
        </div>
      );
    } else {
      return (
        <div className="registration-header">
          <div className="registration_h1">Create your account</div>
          <div className="registration_h2">Registration is easy.</div>
        </div>
      );
    }
  }

  renderClose() {
    return (
      <div className="close-container">
        <button onClick={this.props.closeModal} className="close-x">
          X
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        {this.renderClose()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderHeader()}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label className="login-input-label">
              Email address
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            {this.props.formType === "signup" && (
              <div>
                <label className="login-input-label">
                  First name
                  <input
                    type="text"
                    value={this.state.firstname}
                    onChange={this.update("firstname")}
                    className="login-input"
                  />
                </label>
              </div>
            )}
            <br />
            <label className="login-input-label">
              Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit">
              {this.props.formType === "login" ? "Sign in" : "Register"}
            </button>
            {this.props.formType === "login" && (
              <button onClick={this.handleDemoUser} className="session-submit">
                Demo Login
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
