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
  StyledDiv,
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
      return productData.map((item) => {
        console.log('item', item)
        
        if (item.storage === 0) {
          return (
            <StyledBlockMenu style={{opacity: 0.8}} key={item.id}>
              <StyledSubMenuMessage>{item.name}</StyledSubMenuMessage>
              <StyleImg src={item.image}/>
              <StyledBlockPrice style={{color: 'red'}}> Sold Out</StyledBlockPrice>
            </StyledBlockMenu>
          )
        } else {
         return (
          <StyledBlockMenu onClick={() => router.push(`/shopping?id=${item.id}`)} key={item.id}>
            <StyledSubMenuMessage>{item.name}</StyledSubMenuMessage>
            <StyleImg src={item.image}/>
            <StyledBlockPrice>{item.price} Bath</StyledBlockPrice>
          </StyledBlockMenu>
         )
        }
      
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData])

 const renderFilter = useMemo(() => {
  return filterProduct.map((item) => (
    <StyledFilterPrice key={item}>
      <StyledBlockAddFilter type="link" onClick={() => onFilter(item)}>{item}</StyledBlockAddFilter>
    </StyledFilterPrice>
  ))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [filterProduct])

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHoldingWelcomeMessage>
          {`Vending Machine`}
        </StyledHoldingWelcomeMessage>
      </StyledHeader>
      <StyledHoldingBody>
        <StyledDivRoot>
          <StyledDiv>
            {renderFilter}
          </StyledDiv>
          <StyledDivMargin>
            {selectFilter}
          </StyledDivMargin>
        </StyledDivRoot>
        <StyledHoldingRow>
          {renderProduct}
        </StyledHoldingRow>
        
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default memo(ProductList)
