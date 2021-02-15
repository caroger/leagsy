import React from "react";
import { withRouter } from "react-router-dom";
import { demoLogin } from "../../actions/session_actions";

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

  handleKeyUp(e) {
    const { closeModal} = this.props;
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
        <div>
          <h2>Sign In</h2>
          {this.props.otherForm}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Create your account</h2>
          <h3>Registration is Easy</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">
        {/* <div onClick={this.handleKeyUp} className="close-x"> */}
          X
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderHeader()}

          <br />
          {/* Please {this.props.formType} or {this.props.otherForm} */}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              email:
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
                <label>
                  Firstname:
                  <input
                    type="text"
                    value={this.state.firstname}
                    onChange={this.update("firstname")}
                    className="login-input"
                  />
                </label>
              </div>
            )}
            <label>
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
              {this.props.formType}
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
// import React from "react";

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: "",
//       password: "",
//       email: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//     this.displayInsted = this.displayInsted.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = { user: Object.assign({}, this.state) };
//     this.props.processForm(user).then(this.props.closeModal);
//   }

//   update(field) {
//     return (e) =>
//       this.setState({
//         [field]: e.currentTarget.value,
//       });
//   }
//   renderErrors() {
//     return (
//       <ul className="render-errors-ul">
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`} className="render-errors">
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//   displayHeader() {
//     let formtype = this.props.formType;
//     if (formtype === "login") {
//       return "Sign in";
//     } else if (formtype === "signup") {
//       return "Create your account";
//     }
//   }
//   componentWillUnmount() {
//     this.props.clearErrors();
//   }

//   displayFirstName() {
//     let formtype = this.props.formType;
//     if (formtype === "signup") {
//       return (
//         <>
//           <label className="sesion-labels">First name</label>
//           <input
//             type="text"
//             value={this.state.firstname}
//             onChange={this.update("firstname")}
//             className="login-input"
//           />
//         </>
//       );
//     }
//   }

//   displayInsted() {
//     let formtype = this.props.formType;
//     let x = this.props.otherForm;
//     if (formtype === "signup") {
//       return (
//         <>
//           <p className="p-left">Already have an account?</p>
//           <div className="form-underline">{this.props.otherForm} </div>
//           <p className="p-right">Now</p>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <p className="p-left">New to Kidsy?</p>
//           <div className="form-underline">{this.props.otherForm}</div>
//           <p className="p-right">Now</p>
//         </>
//       );
//     }
//   }

//   formdisplay() {
//     let formtype = this.props.formType;
//     if (formtype === "signup") {
//       return "Register";
//     } else {
//       return "Sign in";
//     }
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <form onSubmit={this.handleSubmit} className="login-form-box">
//           <h1 className="text-title">{this.displayHeader()}</h1>

//           <div className="login-form">
//             <br />
//             <label className="sesion-labels">Email address</label>
//             <input
//               type="text"
//               value={this.state.email}
//               onChange={this.update("email")}
//               className="login-input"
//             />
//             {this.displayFirstName()}
//             <br />
//             <label className="sesion-labels">Password</label>
//             <input
//               type="password"
//               value={this.state.password}
//               onChange={this.update("password")}
//               className="login-input"
//             />

//             <br />
//             <input
//               className="session-submit"
//               type="submit"
//               value={this.formdisplay()}
//             />
//           </div>
//           {this.renderErrors()}
//           <div className="alternative-form">{this.displayInsted()}</div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SessionForm;
