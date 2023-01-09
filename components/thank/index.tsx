/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState, useMemo } from 'react';
import { useWalletContext } from "@Context/wallet";
import {
  StyledContainer,
  StyledHoldingBody,
  PageStyle,
  StyleTextLine,
  StyleText,
  StyleTextList,
} from './thank.style';
import { useRouter } from 'next/router'

const FIXLOOP = 20
export interface IResultProps {
}

const ThankComponent : FC<IResultProps> = ({
}) => {
  const {
    getWallet,
    setWallet
  } = useWalletContext() as any;
  const [myMoney, setMyMoney] = useState<Array<number>>([]);
  const router = useRouter()
  const onCalWallet = (value: number) => {
    const arrTemp: number[] = []
    const recursiveFunc = (wallet: number, sum: number = 0) => {
      const newWallet = wallet - sum
      if(newWallet === 0){
        return;
      }
      if(newWallet >= 1000) {
        return arrTemp.push(1000)
      }
      if(newWallet >= 500) {
        return arrTemp.push(500)
      }
      if(newWallet >= 100) {
        return arrTemp.push(100)
      }
      if(newWallet >= 50) {
        return arrTemp.push(50)
      }
      if(newWallet >= 20) {
        return arrTemp.push(20)
      }
      if(newWallet >= 10) {
        return arrTemp.push(10)
      }
      if(newWallet >= 5) {
        return arrTemp.push(5)
      }
      if(newWallet >= 2) {
        return arrTemp.push(2)
      }
      if(newWallet >= 1) {
        return arrTemp.push(1)
      }

    }

    for(let i=0;i< FIXLOOP ;i++) {
      const sum = arrTemp.reduce((a, b) => a + b, 0)
      if (sum < value) {
        recursiveFunc(value, sum)
      }
    }
    setMyMoney(arrTemp)
    console.log('arrTemp', arrTemp)
  }

  useEffect(() => {
    if(getWallet) {
      onCalWallet(getWallet)
    }
  }, [getWallet])

  useEffect(() => {
    const timer = setTimeout(() => {
      setWallet(0)
      return router.push(`/`)
    }, 8000);
  }, []);

  const renderMoney = useMemo(() => { 
    const counts = myMoney.reduce((acc: any, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1
   }), {});
   return (
    <StyleTextList>
      <StyleText> 1000 x {counts['1000'] || 0} </StyleText>
      <StyleText> 500 x {counts['500'] || 0} </StyleText>
      <StyleText> 100 x {counts['100'] || 0}</StyleText>
      <StyleText> 50 x {counts['50'] || 0} </StyleText>
      <StyleText> 20 x {counts['20'] || 0} </StyleText>
      <StyleText> 10 x {counts['10'] || 0}</StyleText>
      <StyleText> 5 x {counts['5'] || 0} </StyleText>
      <StyleText> 2 x {counts['2'] || 0} </StyleText>
      <StyleText> 1 x {counts['1'] || 0}</StyleText>
    </StyleTextList>
   )
  }, [myMoney])

  return (
    <StyledContainer>
      <StyledHoldingBody>
        <PageStyle>
          Thank You
        </PageStyle>
        <StyleTextLine>
          <StyleText style={{fontSize: '20px', marginBottom: '20px'}}>
            You Will Get Money {getWallet}
          </StyleText>
          {renderMoney}
        </StyleTextLine>
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default (ThankComponent)
