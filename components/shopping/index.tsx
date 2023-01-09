/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { useMemo, FC, memo, useState, useEffect, useCallback } from 'react';
import { useWalletContext } from "../../context/wallet";
import { Card } from 'antd';
import { useRouter } from 'next/router'
import {
  StyledHeader,
  StyledContainer,
  StyledHoldingBody,
  StyledHoldingWelcomeMessage,
  StyledDivMargin,
  StyledDivRoot,
  SideBar,
  StyledBlockAdd,
  BlockDetails,
  StyleText,
  StyleBockButton,
  StyleTextLine
} from './shopping.style';
import API from '@Adapter/ProductListApi'
import { IGetProductListResponse } from '@Models/ProductListModel'

export interface IShoppingProps {
  onCalWallet: () => void
  onCancel: () => void
  data: IGetProductListResponse | null
}

const ShoppingComponent : FC<IShoppingProps> = ({
  onCalWallet,
  onCancel,
  data
}) => {
  const {
    getWallet,
    setWallet
  } = useWalletContext() as any;
  const router = useRouter()

  const onEditProduct = async() => {
    if (data) {
      const newStorage = Number(data.storage) - 1
      await API.editProduct(
        data.id,
        data.name,
        data.price,
        newStorage,
        data.typeKey,
        data.typeName,
        data.image
      )
    }
  }

  const onOrder = () => {
    const cal = getWallet - Number(data?.price)
    setWallet(cal)
    onEditProduct()
    return router.push(`/result`)
  }

  const renderBlockCard = useMemo(() => {
    return  (
    <StyledDivRoot>
      <StyledDivMargin>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" 
          style={{ 
            maxHeight: '255px',
            width: '100%',
            margin: 'auto', 
          }} 
          src={data?.image} />}
        >
          {/* <Meta title={data?.name} description={data?.price} /> */}
        </Card>
        <BlockDetails>
          <StyleTextLine>
            <StyleText style={{color: 'black'}}> You Wallet</StyleText>
            { !getWallet ?
            <StyleText style={{color: 'red'}}> please insert money</StyleText>
            :<StyleText style={{color: 'black'}}> {getWallet}</StyleText>
            }
          </StyleTextLine>
          <StyleText style={{textAlign: 'center', fontSize: '80px', color: 'black'}}> {data?.price}</StyleText>
          {/* <StyleText style={{color: 'red'}}> please insert money</StyleText> */}
          <StyleBockButton>
            <StyledBlockAdd onClick={onCancel}>
              <StyleText>Cancel</StyleText>
            </StyledBlockAdd>
            <StyledBlockAdd disabled={!getWallet || getWallet - Number(data?.price) < 0} type="primary" onClick={onOrder}>
              <StyleText>Order</StyleText>
            </StyledBlockAdd>
          </StyleBockButton>
        </BlockDetails>
      </StyledDivMargin>
    </StyledDivRoot>
    )
  }, [data])

  return (
    <StyledContainer>
      <SideBar >
        <StyleText onClick={() => router.push(`/`)}> Back</StyleText>
        <StyleText onClick={() => router.push(`/addMoney`)}> Add money</StyleText>
      </SideBar>
      <StyledHeader>
        <StyledHoldingWelcomeMessage>
          {data?.name}
        </StyledHoldingWelcomeMessage>
      </StyledHeader>
      <StyledHoldingBody>
        {renderBlockCard}
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default (ShoppingComponent)
