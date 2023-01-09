import React from 'react';
import { StyledLoader } from './loading.style';

const LoadingIcon = ({
  invertColor = false,
  customMargin = 'auto',
}) => (
  <StyledLoader
    invertColor={invertColor}
    customMargin={customMargin}
  />
);
export default LoadingIcon;
