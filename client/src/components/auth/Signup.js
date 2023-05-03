import SignupForm from "./components/SignupForm";
import PageLayout from "./PageLayout";

const Signup = () => {
  const Form = SignupForm;
  const heading = "Sign up";

  return <PageLayout Form={Form} heading={heading} />;
};

export default Signup;
