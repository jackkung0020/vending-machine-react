/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FC, useEffect } from 'react'
import { Alert, Button, Form, Input, Radio } from 'antd'
import {
  StyledContainer,
} from './update.style'
import API from '@Adapter/ProductListApi'
import { useRouter } from 'next/router'

type LayoutType = Parameters<typeof Form>[0]['layout']

const UpdatePage: FC = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [storage, setStorage] = useState(0)
  const [typeKey, setTypeKey] = useState('')
  const [typeName, setTypeName] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()
  const { id } = router.query;

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

  const onEditProduct = async() => {
    await API.editProduct(
      id,
      name ,
      price,
      storage,
      typeKey,
      typeName,
      image
    )
    alert('Success')
    return router.push(`/admin`)
  }

  const onDeleteProduct = async() => {
    await API.delteProduct(
      id,
    )
    alert('Success')
    return router.push(`/admin`)
  }

  const getProduct = async () => {
    const response = await API.getProduct(id)
    setName(response.name)
    setPrice(response.price)
    setStorage(response.storage)
    setTypeKey(response.typeKey)
    setTypeName(response.typeName)
    setImage(response.image)
  }

  useEffect(() => {
    if(id) {
      getProduct()
    }
  }, [id])

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
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="input name" />
        </Form.Item>
        <Form.Item label="Price">
          <Input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="input price" />
        </Form.Item>
        <Form.Item label="Storage">
          <Input value={storage} onChange={(e) => setStorage(Number(e.target.value))} placeholder="input storage" />
        </Form.Item>
        <Form.Item label="Type Name">
          <Input value={typeName} onChange={(e) => setTypeName(e.target.value)} placeholder="Soft Drink, Milk" />
        </Form.Item>
        <Form.Item label="Type Key">
          <Input value={typeKey} onChange={(e) => setTypeKey(e.target.value)} placeholder="softDrink, milk" />
        </Form.Item>
        <Form.Item label="Image">
          <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="input URL image" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
        <Button onClick={() => onDeleteProduct()} style={{background: 'red', marginRight: 20}} type="primary">Delete</Button>
          <Button onClick={() => router.push(`/admin`)} style={{marginRight: '20px'}}>Cancel</Button>
          <Button onClick={() => onEditProduct()} type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  )
}

export default UpdatePage