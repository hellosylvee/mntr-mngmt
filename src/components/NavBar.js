import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'


export default class NavBar extends Component {
  render() {
    return(
      <div>
        <Navbar color="light" light expand="md">
          <Nav>
            <NavItem>
              <NavLink href="#">Monitor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Downtime</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
