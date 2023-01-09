/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { useMemo, FC, memo } from 'react';
import { useRouter } from 'next/router'
import {
  StyledHeader,
  StyledContainer,
  StyledHoldingBody,
  StyledHoldingWelcomeMessage,
  StyledBlockAddFilter,
  StyledBlockMenu,
  StyledSubMenuMessage,
  StyledHoldingRow,
  StyledBlockPrice,
  StyledDivMargin,
  StyledFilterPrice,
  StyledBlockMenuAdmin,
  StyledDivRoot,
  StyleImg
} from './productList.style';

import { IGetProductListResponse } from '@Models/ProductListModel';

export interface IProductListProps {
  productData: IGetProductListResponse[]
  onAddToCart?: (
    item: IGetProductListResponse
  ) => void
  filterProduct: string[]
  onFilter: (
    item: string
  ) => void
  wallet?: number
  selectFilter?: string
}

const ProductList : FC<IProductListProps> = ({
  productData,
  filterProduct,
  onFilter,
  wallet,
  selectFilter
}) => {
  const router = useRouter()

  const renderProduct = useMemo(() => {
      return productData.map((item) => (
        <StyledBlockMenu onClick={() => router.push(`/admin/update?id=${item.id}`)} key={item.id}>
          <StyledSubMenuMessage>{item.name}</StyledSubMenuMessage>
          <StyleImg src={item.image}/>
          <StyledBlockPrice>{item.price} Bath</StyledBlockPrice>
        </StyledBlockMenu>
      ))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData])

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHoldingWelcomeMessage>
          {`Admin Page`}
        </StyledHoldingWelcomeMessage>
      </StyledHeader>
      <StyledHoldingBody>
        <StyledDivRoot>
          <StyledDivMargin>
            {selectFilter}
          </StyledDivMargin>
        </StyledDivRoot>
        <StyledHoldingRow>
          <StyledBlockMenuAdmin onClick={() => router.push(`/admin/create`)}>
            <StyledSubMenuMessage>Add new +</StyledSubMenuMessage>
            {/* <StyleImg src={item.image}/>
            <StyledBlockPrice>{item.price} Bath</StyledBlockPrice> */}
          </StyledBlockMenuAdmin>
          {renderProduct}
        </StyledHoldingRow>
        
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default memo(ProductList)
