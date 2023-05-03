import axios from "axios";
import styles from "./styles/SignupForm.module.css";

const SignupForm = (props) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <div>
          <label htmlFor="username">Pick a username</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email ID</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Enter a password</label>
          <input type="password" name="password" minLength="8" required />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
