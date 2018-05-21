import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, ListGroup, ListGroupItem, Input } from 'reactstrap';

export default class Filter extends Component {
  render() {
    return(
      <div className="filter-panel">
        <h4>Filter List</h4>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              <ListGroup>
                <ListGroupItem tag="a">
                  <Input addon type="checkbox"/> Cras justo odio</ListGroupItem>
                <ListGroupItem tag="a">
                  <Input addon type="checkbox"/> Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="a">
                  <Input addon type="checkbox"/> Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a">
                  <Input addon type="checkbox"/> Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem tag="a">
                  <Input addon type="checkbox"/> Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}
