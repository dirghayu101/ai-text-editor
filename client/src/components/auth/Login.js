import PageLayout from "./PageLayout";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const Form = LoginForm;
  const heading = "User Login";
  return <PageLayout Form={Form} heading={heading} />;
};

export default Login;
