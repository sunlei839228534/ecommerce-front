import React, { useEffect, useState } from 'react'
import Layout from '../core/Layout'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { API } from '../../config'
import { Jwt } from '../../store/models/auth'
import { isAuth } from '../../helpers/auth'
import { Link } from 'react-router-dom'

const AddCatgory = () => {
  const [name, setName] = useState<string>('')

  const { user, token } = isAuth() as Jwt

  useEffect(() => {
    async function addCategory() {
      try {
        let response = await axios.post<{ name: string }>(`${API}/category/create/${user._id}`, {
          name
        }, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        message.success(`[${response.data.name}]分类添加成功！`)
      } catch (error: any) {
        message.error(error.response.data.error)
      }
    }
    if (name) {
      addCategory()
    }
  }, [name])

  const onFinish = (value: { name: string }) => {
    setName(value.name)
  }

  return (
    <Layout title="添加分类" subTitle="">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label='分类名称'>
          <Input />
        </Form.Item>
        <Form.Item >
          <Button type='primary' htmlType='submit'>添加分类 </Button>
        </Form.Item>
      </Form>
      <Button><Link to="/admin/dashboard">返回dashboard</Link></Button>
    </Layout>
  )
}

export default AddCatgory