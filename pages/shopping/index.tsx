/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import ShoppingComponent from '@Components/shopping';
import { useRouter } from 'next/router'
import { useWalletContext } from "@Context/wallet";
import API from '@Adapter/ProductListApi'
import { IGetProductListResponse } from '@Models/ProductListModel'
import LoadingIcon from '@Components/loading';

const ShoppingPage = () => {
  const {
    getWallet,
    setWallet
  } = useWalletContext() as any;
  const [dataProduct, setDataProduct] = useState<IGetProductListResponse | null>(null);
  const router = useRouter()
  const { id } = router.query;

  const getProduct = async () => {
    const response = await API.getProduct(id)
    setDataProduct(response)
  }

  const onCancel = useCallback(() => {
    return router.push(`/`)
  },[])
  
  const onCalWallet = useCallback(() => {
    const cal = getWallet - 20
    setWallet(cal)
    return router.push(`/`)
  },[])


  useEffect(() => {
    if(id) {
      getProduct()
    }
  }, [id])

  return (
    !dataProduct
    ? <LoadingIcon />
    : 
    <ShoppingComponent 
      onCalWallet={onCalWallet}
      data={dataProduct}
      onCancel={onCancel}
    />
  )
}

export default ShoppingPage