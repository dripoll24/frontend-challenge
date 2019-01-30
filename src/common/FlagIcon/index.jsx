// @flow

import React from 'react';
import FlagIconFactory from 'react-flag-icon-css';
import { getCountryCodeByNationality } from '../../utils';

const FlagIconComp = FlagIconFactory(React, { useCssModules: false });

type IProps = {
  nationality: string;
};

const FlagIcon = ({ nationality }: IProps) => (
  <FlagIconComp code={getCountryCodeByNationality(nationality)} />
);

export default FlagIcon;
