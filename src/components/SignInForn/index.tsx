import { Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

import { useAxios } from "../../utils";

export const SignInForm = () => {
  const axios = useAxios();
  const history = useHistory();

  const onFinish = (values: any) => {
    axios
      .post("/auth/login", values)
      .then(() => history.push("sign-in"))
      .catch((err) => console.error(err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="signup"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            pattern: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email address!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Input email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<KeyOutlined />} placeholder="Input password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сonfirm
        </Button>
      </Form.Item>
    </Form>
  );
};
