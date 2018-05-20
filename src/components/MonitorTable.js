import React, { Component } from 'react'
import { Table, Input } from 'reactstrap';

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
        <tbody>
          <tr>
            <th scope="row" className="checkboxColumn">
              <Input addon type="checkbox"/>
            </th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row" className="checkboxColumn">
              <Input addon type="checkbox"/>
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row" className="checkboxColumn">
              <Input addon type="checkbox"/>
            </th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
