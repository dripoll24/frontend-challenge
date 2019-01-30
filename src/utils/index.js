import countries from 'world-countries';

export { default as httpClient } from './http-client';

export const getCountryCodeByNationality = (nationality) => {
  const country = countries.find(c => c.demonym === nationality);
  return country ? country.cca2.toLowerCase() : '';
};
