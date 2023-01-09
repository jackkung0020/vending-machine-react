/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FC } from 'react'
import { Alert, Button, Form, Input, Radio } from 'antd'
import {
  StyledContainer,
} from './create.style'
import API from '@Adapter/ProductListApi'
import { useRouter } from 'next/router'

type LayoutType = Parameters<typeof Form>[0]['layout']

const CreatePage: FC = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [storage, setStorage] = useState(0)
  const [typeKey, setTypeKey] = useState('')
  const [typeName, setTypeName] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout)
  }

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null

  const buttonItemLayout =
    formLayout === 'horizontal'
    ? {
        wrapperCol: { span: 14, offset: 4 },
      }
    : null

  const onAddProduct = async() => {
    await API.addProduct(
      name ,
      price,
      storage,
      typeKey,
      typeName,
      image
    )
    alert('Success')
    return router.push(`/admin`)
    // return <Alert message="Success Text" type="success" />

  }
  return (
    <StyledContainer>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Name">
          <Input onChange={(e) => setName(e.target.value)} placeholder="input name" />
        </Form.Item>
        <Form.Item label="Price">
          <Input onChange={(e) => setPrice(Number(e.target.value))} placeholder="input price" />
        </Form.Item>
        <Form.Item label="Storage">
          <Input onChange={(e) => setStorage(Number(e.target.value))} placeholder="input storage" />
        </Form.Item>
        <Form.Item label="type Name">
          <Input onChange={(e) => setTypeName(e.target.value)} placeholder="Soft Drink, Milk" />
        </Form.Item>
        <Form.Item label="Type Key">
          <Input onChange={(e) => setTypeKey(e.target.value)} placeholder="softDrink, milk" />
        </Form.Item>
        <Form.Item label="Image">
          <Input onChange={(e) => setImage(e.target.value)} placeholder="input URL image" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button onClick={() => router.push(`/admin`)} style={{marginRight: '20px'}}>Cancel</Button>
          <Button onClick={() => onAddProduct()} type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  )
}

export default CreatePage