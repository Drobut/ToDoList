import Content from "../../components/Content/index.";
import ForgotPasswprdComponent from "../../components/ForgotPassword";

export default function ForgotPassword() {
  return (
    <>
      <div className="layoult">
        <ForgotPasswprdComponent />
        <Content
          description="Reset your password if you forget it."
          subTitle="your password"
          title="Reset"
        />
      </div>
    </>
  );
}
