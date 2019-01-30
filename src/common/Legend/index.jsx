// @flow

import React from 'react';

const style = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  display: 'inline-block',
};

type IProps = {
  color: string;
  title: string;
};

const Legend = ({ color, title }: IProps) => (
  <span style={{ fontSize: 12, fontWeight: 400 }}>
    <span style={{ ...style, backgroundColor: color }} />
    &nbsp;
    {title}
  </span>
);

export default Legend;
