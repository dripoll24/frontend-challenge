// @flow

export type IDriver = {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
};

export type IConstructor = {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
};

type IDriverStandings = {
  points: string;
  position: string;
  positionText: string;
  wins: string;
  Driver: IDriver;
  Constructors: IConstructor[];
}

export type IStandingsLists = {
  round: string;
  season: string;
  DriverStandings: IDriverStandings[];
};

export type IStandingsTable = {
  driverStandings: string;
  StandingsLists: IStandingsLists[];
};
