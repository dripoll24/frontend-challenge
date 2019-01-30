// @flow
import type { IConstructor, IDriver } from './standings';

type ILocation = {
  country: string,
  lat: string,
  locality: string,
  long: string,
}

type ICircuit = {
  circuitId: string,
  circuitName: string,
  url: string,
  Location: ILocation,
}

type ITime = {
  millis: string,
  time: string,
}

type IAverageSpeed = {
  speed: string,
  units: string,
}

type IFastestLap = {
  lap: string,
  rank: string,
  Time: ITime,
  AverageSpeed: IAverageSpeed,
}

type IResult = {
  grid: string,
  laps: string,
  number: string,
  points: string,
  position: string,
  positionText: string,
  status: string,
  Constructor: IConstructor,
  Driver: IDriver,
  FastestLap: IFastestLap,
  Time: ITime,
}

export type IRace = {
  Circuit: ICircuit,
  Results: IResult[],
  date: string,
  raceName: string,
  round: string,
  season: string,
  time: string,
  url: string,
}

export type IRaceTable = {
  position: string,
  season: string,
  Races: IRace[]
}
