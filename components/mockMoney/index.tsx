/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { useMemo, FC, memo, useState, useEffect, useCallback } from 'react';
import { useWalletContext } from "../../context/wallet";
import { Card, notification } from 'antd';
import { useRouter } from 'next/router'
import {
  StyledContainer,
  StyledHoldingBody,
  SideBar,
  MockWalletStyle,
  StyleBetween,
  StyleText,
} from './mockMoney.style';

export interface IMoneyProps {
}

type NotificationType = 'success';

const MoneyComponent : FC<IMoneyProps> = ({
}) => {
  const [api, contextHolder] = notification.useNotification();
  const {
    getWallet,
    setWallet
  } = useWalletContext() as any;
  let [localWallet, setLocalWallet] = useState<number>(getWallet);
  const router = useRouter()
  const openNotificationWithIcon = useCallback((type: NotificationType, value: number | string) => {
    api[type]({
      message: 'Add Wallet',
      description:
      value,
    });
    if (value === 'reset') {
      setWallet(null)
      return  router.back()
    } else {
      const cal = getWallet + value
      if (cal > 10000) {
        alert('Limit 10,000')
        return router.back()
      }
      setWallet(cal)
      return router.back()
    }
  },[])

  const renderMockMoney = useMemo(() => {
    return  <Card title="Mock Add Wallet" bordered={false} style={{ width: '100%' }}>
      <StyleBetween>
        <StyleText onClick={() => openNotificationWithIcon('success', 'reset')}>Reset</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 1)}>+ 1</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 2)}>+ 2</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 5)}>+ 5</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 10)}>+ 10</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 20)}>+ 20</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 50)}>+ 50</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 100)}>+ 100</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 500)}>+ 500</StyleText>
        <StyleText onClick={() => openNotificationWithIcon('success', 1000)}>+ 1000</StyleText>
      </StyleBetween>
      {contextHolder}
    </Card>
  }, [])

  return (
    <StyledContainer>
      <SideBar onClick={() => router.push(`/`)}>
        Back
      </SideBar>
      <StyledHoldingBody>
        <MockWalletStyle>
          {renderMockMoney}
        </MockWalletStyle>
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default (MoneyComponent)
