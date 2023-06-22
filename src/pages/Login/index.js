import { Button, Card,  Col, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import { login } from '../../redux/Actions/counterActions';
import { connect } from 'react-redux';
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://images.unsplash.com/photo-1583086877665-bdaa49ff8368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      center;
  background-size: cover;
`;
function Login({ dispatch }) {
  console.log(dispatch);
  const onFinish = (values) => {
    const { email, password } = values;
    console.log(email);
    if (email !== 'admin@gmail.com') {
      handleEmailValidationError('Your Email is not found');
      return;
    }
    if (password !== 'Abcd@1234') {
      handlePasswordValidationError('Your password is invalid');
      return;
    }
    handleFieldChange()
    dispatch(login())
    console.log('Form submitted:', values);
    localStorage.setItem('token', true)
    form.resetFields()
  };

  const handleEmailValidationError = (errorMessage) => {
    form.setFields([
      {
        name: 'email',
        errors: [errorMessage],
      },
    ]);
  };

  const handlePasswordValidationError = (errorMessage) => {
    form.setFields([
      {
        name: 'password',
        errors: [errorMessage],
      },
    ]);
  };

  const handleFieldChange = () => {
    form.validateFields(['email', 'password']);
  };
  const [form] = Form.useForm();

  return (
    <Container>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={22} sm={8} lg={8} xxl={10}>
          <Card>
            <Row align="center">
            <Col xs={22} sm={20} lg={24}>
              <h3>SIGN IN</h3>
            </Col>

            </Row>
            <Row justify="center">
              <Col xs={22} sm={20} lg={24}>
                <Form
                  name="normal_login"
                  className="login-form"
                  form={form}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email',
                      },
                    ]}
                    help={form.getFieldError('email')?.[0]}
                  >
                    <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your password',
                      },
                    ]}
                    help={form.getFieldError('password')?.[0]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      size='large'
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default connect()(Login);