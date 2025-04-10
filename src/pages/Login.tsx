import { LockOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import fetcher from "../api/fetcher";

export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    fetcher
      .post("/users/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại!");
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <h1 className="mt-2 mb-4 text-center text-3xl font-bold text-blue-700 uppercase">
          Nhà thông minh
        </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<VerifiedUserOutlined className="text-gray-300" />}
              size="large"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="text-gray-300" />}
              size="large"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="flex justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
