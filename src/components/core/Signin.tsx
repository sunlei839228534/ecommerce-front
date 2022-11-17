
import { Button, Form, Input } from 'antd'
import React from 'react'
import Layout from './Layout'

export default function Signin() {
  return (
    <Layout title='登陆' subTitle='' >      <Form>

      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>注册</Button>
      </Form.Item>
    </Form></Layout>
  )
}
