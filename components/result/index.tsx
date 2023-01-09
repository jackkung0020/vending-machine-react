/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { FC } from 'react';
import { useRouter } from 'next/router'
import {
  StyledContainer,
  StyledHoldingBody,
  PageStyle,
  StyleBockButton,
  StyleText,
  StyledBlockAdd
} from './result.style';

export interface IResultProps {
}

const ResultComponent : FC<IResultProps> = ({
}) => {
  const router = useRouter()

  return (
    <StyledContainer>
      <StyledHoldingBody>
        <PageStyle>
          you want to order more ?
        </PageStyle>
        <StyleBockButton>
          <StyledBlockAdd onClick={() => router.push(`/thank`)}>
            <StyleText>No</StyleText>
          </StyledBlockAdd>
          <StyledBlockAdd type="primary" onClick={() => router.push(`/home`)}>
            <StyleText>Yes</StyleText>
          </StyledBlockAdd>
        </StyleBockButton>
      </StyledHoldingBody>
    </StyledContainer>
  );
}
export default (ResultComponent)
