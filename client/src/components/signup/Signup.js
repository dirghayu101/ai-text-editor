import styles from "./Signup.module.css";
import SignupForm from "./components/SignupForm";
import LogoHeader from "../utils/LogoHeader";

const Signup = () => {
  return (
    <>
      <LogoHeader />
      <div className={styles.background_container}>
        <div className={styles.formBox}>
          <h1>Sign up</h1>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
