
import { Button, Form, Input, Result } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { signin, SigninPayload } from '../../store/actions/auth.actions'
import { Jwt } from '../../store/models/auth'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducers'
import Layout from './Layout'

export default function Signin() {
  const dispatch = useDispatch()
  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value))
  }

  const auth = useSelector<AppState, AuthState>(state => state.auth)

  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return <Result
        status="warning"
        title="登陆失败！"
        subTitle={auth.signin.message}
      />
    }
  }

  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const { user: { role } } = auth as Jwt

      if (role === 0) {
        //注册用户
        return <Redirect to="/user/dashboard" />
      } else {
        //管理员
        return <Redirect to="/admin/dashboard" />
      }
    }

  }

  const signinForm = () => {
    return (<Form onFinish={onFinish}>

      <Form.Item name="email" label="邮箱">
        <Input></Input>
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType='submit'>登陆</Button>
      </Form.Item>
    </Form>)
  }
  return (
    <Layout title='登陆' subTitle='嘿，小伙伴，立即登陆到拉钩电商系统吧' >
      {showError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}
