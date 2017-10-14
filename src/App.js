import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import OpinionShow from './components/opinionShow'
import OpinionIndex from './components/opinionIndex'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: "opinionIndex",
      data: {
        opinions: {
          a: {
            title: "title1"
          },
          b: {
            title: "title2"
          }
        }
      }
    }
  }

  componentDidMount() {

    // this.setState({
    //   data:
    // })
  }

  updateCurrentPage(pageName) {
    this.setState({ currentPage: pageName })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        { this.state.currentPage == "opinionIndex" ? <OpinionIndex data={ this.state.data } updateCurrentPage={ this.updateCurrentPage } /> : <OpinionShow /> }
      </div>
    );
  }
}

export default App;
