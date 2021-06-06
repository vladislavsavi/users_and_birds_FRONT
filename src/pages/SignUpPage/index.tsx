import { Card } from "antd";
import { SignUpForm } from "../../components";
import "./sign-up.scss";

export const SignUpPage = () => {
  return (
    <Card title="Sign up" className="sign-up casts_shadow">
      <SignUpForm />
    </Card>
  );
};
