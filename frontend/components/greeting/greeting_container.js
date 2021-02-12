import { connect } from "react-redux";
import Greeting from "./greeting";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mSTP, null)(Greeting);
