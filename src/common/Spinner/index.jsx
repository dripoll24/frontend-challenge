// @flow

import React from 'react';
import { ClipLoader } from 'react-spinners';

type IProps = {
  size?: number,
  color?: string,
  sizeUnit?: string,
  isLoading: boolean,
};

const Spinner = ({
  size,
  sizeUnit,
  color,
  isLoading,
  ...rest
}: IProps) => (
  <div style={{ textAlign: 'center', marginTop: 15 }}>
    <ClipLoader
      size={size}
      color={color}
      sizeUnit={sizeUnit}
      loading={isLoading}
      {...rest}
    />
  </div>
);

Spinner.defaultProps = {
  size: 50,
  sizeUnit: 'px',
  color: '#123abc',
};

export default Spinner;
