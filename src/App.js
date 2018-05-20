import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './App.css'

import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import MonitorTable from './components/MonitorTable'
import FilterPanel from './components/FilterPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Row>
            <Col md="8" className="main">
              <Row><SearchBar /></Row>
              <Row><MonitorTable /></Row>
            </Col>
            <Col md="4" className="aside">
              <FilterPanel />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
