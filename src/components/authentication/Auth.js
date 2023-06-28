import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

import "./auth.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
