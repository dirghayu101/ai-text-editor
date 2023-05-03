import styles from "./styles/Signup.module.css";
import LogoHeader from "../utils/LogoHeader";

const PageLayout = ({ Form, heading }) => {
  return (
    <>
      <LogoHeader />
      <div className={styles.background_container}>
        <div className={styles.formBox}>
          <h1>{heading}</h1>
          <Form />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
