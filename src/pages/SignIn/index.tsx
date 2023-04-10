import Content from "../../components/Content/index.";
import SignInComponent from "../../components/SignUp";

export default function SignIn() {
  return (
    <>
      <div className="layoult">
        <SignInComponent />
        <Content
          description="Sign up to complete creation of your personal account"
          subTitle="Create an account"
          title="Sign Up"
        />
      </div>
    </>
  );
}
