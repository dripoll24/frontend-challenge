// @flow

import idx from 'idx';
import { httpClient } from '../utils';

import type { IResponse } from '../models/response';
import type { IRace, IRaceTable } from '../models/races';
import type { IDriver, IStandingsTable, IStandingsLists } from '../models/standings';

export const getWorldChampions = async (limit: number = 11, offset: number = 55): Promise<?IStandingsLists[]> => {
  const data: IResponse<IStandingsTable> = await httpClient.get('driverstandings/1.json', { limit, offset });
  return idx(data, _ => _.MRData.StandingsTable.StandingsLists);
};

export const getListOfWinners = async (season: string): Promise<?IRace[]> => {
  const data: IResponse<IRaceTable> = await httpClient.get(`${season}/results/1.json`);
  return idx(data, _ => _.MRData.RaceTable.Races);
};

export const getWorldChampion = async (season: string): Promise<?IDriver> => {
  const data: IResponse<IStandingsTable> = await httpClient.get(`${season}/driverStandings/1.json`);
  return idx(data, _ => _.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver);
};
