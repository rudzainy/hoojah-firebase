import React from "react"
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap"

class OpinionShow extends React.Component {
  render() {
    return(
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    )
  }
}

export default OpinionShow

