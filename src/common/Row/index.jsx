// @flow

import './Row.css';

import * as React from 'react';

type IProps = {
  className?: string,
  children: React.Node,
}

const Row = ({ children, className, ...rest }: IProps) => (
  <tr className={`table-row ${className || ''}`} {...rest}>
    {children}
  </tr>
);

Row.defaultProps = {
  className: '',
};

export default Row;
