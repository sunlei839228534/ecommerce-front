import React, { useEffect } from 'react'
import Layout from './Layout'
import { Form, Input, Button, Result } from 'antd'
import { resetSignup, signup, SingupPayload } from '../../store/actions/auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducers'
import { Link } from 'react-router-dom'


export default function Signup() {
  const dispatch = useDispatch()
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  const [form] = Form.useForm()

  const onFinish = (value: SingupPayload) => {
    dispatch(signup(value))
  }

  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields()
    }
  }, [auth])

  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return <Result
        status="success"
        title="注册成功"
        extra={[
          <Button type="primary">
            <Link to="/signin">登陆</Link>
          </Button>
        ]}
      />
    }
  }

  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return <Result
        status="warning"
        title="注册失败！"
        subTitle={auth.signup.message}
      />
    }
  }

  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])

  const signupForm = () => (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>注册</Button>
      </Form.Item>
    </Form>
  )

  return (
    <Layout title='注册' subTitle=''>
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}
