import styles from "./styles/SignupForm.module.css";
import nativeStyle from "./styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className={styles.signupForm}>
      <div>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Enter a password</label>
        <input
          type="password"
          name="password"
          minLength="8"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className={nativeStyle.forgotPassword}
          onClick={() => {
            navigate("/login/recovery");
          }}
        >
          Forgot password
        </span>
      </div>
      <div>
        <button type="submit" id={nativeStyle.loginBtn}>
          Login
        </button>
        <span className={nativeStyle.signUp}>
          Not a member? <a href="/signup">Signup</a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
