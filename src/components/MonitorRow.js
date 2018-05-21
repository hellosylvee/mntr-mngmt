import React, { Component } from 'react'
import { Input } from 'reactstrap';

export default class MonitorRow extends Component {
  render() {
    return(
      <tbody>
        <tr>
          <th scope="row" className="checkboxColumn">
            <Input addon type="checkbox"/>
          </th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    )
  }
}
