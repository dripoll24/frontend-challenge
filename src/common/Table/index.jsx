// @flow

import * as React from 'react';

type IProps = {
  children: React.Node,
};

const Table = ({ children }: IProps) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    {children}
  </table>
);

export default Table;
