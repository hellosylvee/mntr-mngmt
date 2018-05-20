import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return(
      <div className="search-section">
        <h4>Filter List</h4>
        <FormGroup className="searchMonitor">
          <Input type="search" name="search" id="searchMonitor" placeholder="Search by name or tag" />
        </FormGroup>
      </div>
    )
  }
}
