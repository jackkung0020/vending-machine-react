export interface IGenerateKey {
  generateKey?: string | number
}

export interface IGetProductListResponse extends IGenerateKey {
  id: string
  name: string
  price: number
  storage: number
  typeKey: string
  typeName: string
  image: string
}
