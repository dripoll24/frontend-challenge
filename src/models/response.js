// @flow

type IResponseDetails<T> = {
  [key: string]: T;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
};

export type IResponse<T> = {
  MRData: IResponseDetails<T>;
};
