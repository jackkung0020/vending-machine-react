import styled from 'styled-components';
import { Spin } from 'antd';

export const StyledLoadingIcon = styled.img`
  width: 50px;
  height: 20px;
  margin: auto;
`;

export const StyledLoader: any = styled(Spin)`
  .ant-spin-dot-item {
    background-color: #000000;
  }
`;
