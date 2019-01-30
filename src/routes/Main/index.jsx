// @flow

import React, { Component } from 'react';
import idx from 'idx';
import type { ContextRouter } from 'react-router-dom';
import type { IStandingsLists } from '../../models/standings';
import { getWorldChampions } from '../../services';
import {
  Row,
  Table,
  Driver,
  FlagIcon,
  Spinner,
} from '../../common';

type IState = {
  isLoading: boolean;
  standingList: ?IStandingsLists[];
};

export default class Main extends Component<ContextRouter, IState> {
  state = {
    isLoading: true,
    standingList: [],
  };

  componentDidMount() {
    getWorldChampions()
      .then(data => this.setState(state => ({ isLoading: !state.isLoading, standingList: data })));
  }

  navigateToDetails = (season: string) => {
    const { history } = this.props;
    history.push(`/main/${season}`);
  }

  render() {
    const { standingList, isLoading } = this.state;

    return (
      <>
        <h2>World Champions</h2>
        <Table>
          <tbody>
            <tr style={{ color: '#0000008a', fontSize: 12 }}>
              <td>Year</td>
              <td colSpan={2}>Driver</td>
              <td>Points</td>
              <td>Wins</td>
            </tr>
            {standingList && standingList.map(d => (
              <Row key={d.season} onClick={() => this.navigateToDetails(d.season)}>
                <td>{d.season}</td>
                <td>
                  <FlagIcon nationality={idx(d, _ => _.DriverStandings[0].Driver.nationality)} />
                </td>
                <td>
                  <Driver
                    driver={idx(d, _ => _.DriverStandings[0].Driver)}
                    builder={idx(d, _ => _.DriverStandings[0].Constructors[0])}
                  />
                </td>
                <td>{idx(d, _ => _.DriverStandings[0].points)}</td>
                <td>{idx(d, _ => _.DriverStandings[0].wins)}</td>
              </Row>
            ))}
          </tbody>
        </Table>
        <Spinner isLoading={isLoading} />
      </>
    );
  }
}
