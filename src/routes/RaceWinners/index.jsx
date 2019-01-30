// @flow

import React, { Component } from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { IRace } from '../../models/races';
import type { IDriver } from '../../models/standings';
import { getWorldChampion, getListOfWinners } from '../../services';
import {
  Row,
  Table,
  Driver,
  Legend,
  Spinner,
  FlagIcon,
} from '../../common';

type IState = {
  races: IRace[],
  isLoading: boolean,
  worldChampion: IDriver,
};

export default class RaceWinners extends Component<ContextRouter, IState> {
  constructor(props: ContextRouter) {
    super(props);

    this.state = {
      races: [],
      isLoading: true,
      worldChampion: {},
    };
  }

  componentDidMount() {
    const { match: { params: { season } } } = this.props;

    getWorldChampion(season || '').then(data => this.setState({ worldChampion: data || {} }));
    getListOfWinners(season || '').then(data => this.setState({ races: data || [], isLoading: false }));
  }

  // eslint-disable-next-line class-methods-use-this
  getDriver(prop: IRace) {
    return idx(prop, _ => _.Results[0].Driver);
  }

  render() {
    const { match: { params: { season } } } = this.props;
    const { races, worldChampion, isLoading } = this.state;

    return (
      <>
        <Link to="/main">Go Back</Link>
        <h2>
          {season}
          &nbsp;
          Races
          <div className="pull-right">
            <Legend title="World Champion" color="#e5eef5" />
          </div>
        </h2>
        <Table>
          <tbody>
            <tr style={{ color: '#0000008a', fontSize: 12 }}>
              <td>Race</td>
              <td colSpan={2}>Driver</td>
              <td>Time</td>
              <td>Points</td>
            </tr>
            {races.map(r => (
              <Row
                key={r.round}
                onClick={() => window.open(r.url)}
                className={idx(this.getDriver(r), _ => _.driverId) === worldChampion.driverId ? 'active' : ''}
              >
                <td>{r.raceName}</td>
                <td>
                  <FlagIcon nationality={idx(this.getDriver(r), _ => _.nationality)} />
                </td>
                <td>
                  <Driver
                    driver={this.getDriver(r)}
                    builder={idx(r, _ => _.Results[0].Constructor)}
                  />
                </td>
                <td>{idx(r, _ => _.Results[0].Time.time)}</td>
                <td>{idx(r, _ => _.Results[0].points)}</td>
              </Row>
            ))}
          </tbody>
        </Table>
        <Spinner isLoading={isLoading} />
      </>
    );
  }
}
