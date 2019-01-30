// @flow

import React from 'react';
import type { IDriver, IConstructor } from '../../models/standings';

const style = {
  fontSize: '12px',
  paddingTop: '2px',
  color: '#0000008a',
  lineHeight: '1.2em',
};

type IProps = {
  driver: IDriver;
  builder: IConstructor;
};

const Driver = ({ driver, builder }: IProps) => (
  <>
    <span>
      {driver.givenName}
      &nbsp;
      {driver.familyName}
    </span>
    <br />
    <span style={style}>
      {builder.name}
    </span>
  </>
);

export default Driver;
