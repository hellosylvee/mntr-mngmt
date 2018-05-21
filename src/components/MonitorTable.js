import React, { Component } from 'react'
import { Table, Input } from 'reactstrap';

import MonitorRow from './MonitorRow'

export default class MonitorTable extends Component {
  render() {
    return(
      <Table>
        <thead>
          <tr>
            <th className="checkboxColumn">
              <Input addon type="checkbox"/>
            </th>
            <th>Names</th>
            <th>Tags</th>
          </tr>
        </thead>
        <MonitorRow />
      </Table>
    )
  }
}
