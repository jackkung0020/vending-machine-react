/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useCallback, useEffect, useContext } from 'react';
import ProductListAdmin from '@Components/admin/productList';
import LoadingIcon from '@Components/loading';
import { useWalletContext } from "../../context/wallet";
import { IGetProductListResponse } from '@Models/ProductListModel'
import API from '@Adapter/ProductListApi'
import {
  StyleLayout
} from './admin.style';

const ALL = 'all'

const HomePage: FC = () => {
  const {
    getWallet,
  } = useWalletContext() as any;
  const [productData, setProductData] = useState<Array<IGetProductListResponse>>([]);
  const [defaultProductData, setDefaultProductData] = useState<Array<IGetProductListResponse>>([]);
  const [filterProductList, setFilterProductList] = useState<string[]>([]);
  const [selectFilter, setSelectFilter] = useState('');
  const [cart, setCart] = useState<Array<IGetProductListResponse>>([]);

  const onAddToCart = useCallback((item: IGetProductListResponse) => {
      cart?.push(item)
      setCart(cart)
    },
    [cart],
  );

  const renderFilterProduct = () => {
    const newTempArr = productData.map(items => items.typeName);
    const filterList = [ALL, ...new Set(newTempArr)];
    return setFilterProductList(filterList)
  }

  const callProductLis = async () => {
    const response = await API.getProductList()
    setProductData(response)
    setDefaultProductData(response)
  }

  const onFilterProduct = useCallback((value: string) => {
    if (value === ALL)  {
      setProductData(defaultProductData)
      return setSelectFilter('')
    }
    const filterProduct = productData.filter((item) => item.typeName === value)
    setProductData(filterProduct)
    setSelectFilter(value)
    },[productData, filterProductList],
  );

  useEffect(() => {
    if (productData === defaultProductData) {
      renderFilterProduct()
    }
  }, [productData, defaultProductData])

  useEffect(() => {
    callProductLis()
  }, [])

  return (
    !productData
      ? <LoadingIcon />
      : 
      <StyleLayout>
        <ProductListAdmin
          productData={productData}
          onAddToCart={onAddToCart}
          filterProduct={filterProductList}
          onFilter={onFilterProduct}
          wallet={getWallet}
          selectFilter={selectFilter}
        />
      </StyleLayout>
  );
}

export default HomePage