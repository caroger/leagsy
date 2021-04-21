import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
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
    const { closeModal } = this.props;
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
    this.props
      .processForm(user)
      // .then(() => this.props.history.push("/home"))
      .then(() => this.props.closeModal());
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: "demo@rtsy.com",
      firstName: "Demo User",
      password: "123456",
    };
    this.props.login(demoUser).then(() => this.props.closeModal());
    // .then(() => this.props.history.push("/home"));
  }

  renderErrors(err) {
    return <p className="error">{err.length === 0 ? " " : err[0]}</p>;
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
    const fnErr = this.props.errors.filter((err) =>
      err.toLowerCase().includes("first name")
    );
    const emErr = this.props.errors.filter((err) =>
      err.toLowerCase().includes("email")
    );
    const pwErr = this.props.errors.filter((err) =>
      err.toLowerCase().includes("password")
    );
    return (
      <div className="login-form-container">
        {this.renderClose()}
        <div className="login-form-box">
          {this.renderHeader()}
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              <br />
              <label className="login-input-label">
                Email address
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className={
                    emErr.length > 0 ? "login-input--error" : "login-input"
                  }
                />
                {this.props.formType === "signup" && this.renderErrors(emErr)}
              </label>
              <br />
              {this.props.formType === "signup" && (
                <div>
                  <label className="login-input-label">
                    First name
                    <input
                      type="text"
                      value={this.state.firstName}
                      onChange={this.update("firstName")}
                      className={
                        fnErr.length > 0 ? "login-input--error" : "login-input"
                      }
                    />
                  </label>
                  {this.renderErrors(fnErr)}
                </div>
              )}
              <br />
              <label className="login-input-label">
                Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className={
                    pwErr.length > 0 ? "login-input--error" : "login-input"
                  }
                />
              </label>
              {this.renderErrors(pwErr)}
              <br />
              <button className="session-submit" type="submit">
                {this.props.formType === "login" ? "Sign in" : "Register"}
              </button>
              {this.props.formType === "login" && (
                <button
                  onClick={this.handleDemoUser}
                  className="session-submit"
                >
                  Demo Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
