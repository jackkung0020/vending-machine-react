/* eslint-disable import/no-anonymous-default-export */
import HttpUtils from '@Utils/HttpUtils'
import {
  IGetProductListResponse,
} from '@Models/ProductListModel'

const apiEndpoint = process.env.FE_API

const getProductList = (): Promise<IGetProductListResponse[]> => {
  return HttpUtils.get<IGetProductListResponse[]>(
    `${apiEndpoint}/products`
  )
}


const getProduct = (
  id: any,
): Promise<IGetProductListResponse> => {
  return HttpUtils.get<IGetProductListResponse>(
    `${apiEndpoint}/product/${id}`
  )
}

const addProduct = (
  name: string,
  price: number,
  storage: number,
  typeKey: string,
  typeName: string,
  image: string,
): Promise<String> => {
  const newPrice = price.toString()
  const newStorage = storage.toString()
  return HttpUtils.post<String>(
    `${apiEndpoint}/product/create`,
    {
      name,
      newPrice,
      newStorage,
      typeKey,
      typeName,
      image
    }
  )
}

const editProduct = (
  id: any,
  name: string,
  price: number,
  storage: number,
  typeKey: string,
  typeName: string,
  image: string,
): Promise<String> => {
  const newPrice = price.toString()
  const newStorage = storage.toString()
  return HttpUtils.post<String>(
    `${apiEndpoint}/product/update/${id}`,
    {
      name,
      newPrice,
      newStorage,
      typeKey,
      typeName,
      image
    }
  )
}

const delteProduct = (
  id: any,
): Promise<String> => {
  return HttpUtils.remove<String>(
    `${apiEndpoint}/product/delete/${id}`
  )
}

export default {
  getProductList,
  getProduct,
  addProduct,
  editProduct,
  delteProduct
}
