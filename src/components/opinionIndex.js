import React, { Component } from 'react'
import '../App.css'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import OpinionCard from '../components/opinionCard'

class OpinionIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      opinions: Object.values(this.props.data.opinions)
    }
  }

  updateCurrentPage() {
    this.props.updateCurrentPage("opinionShow")
  }

  render() {

    console.log(this.props)
    return (
      <Grid>
        <Row className="show-grid">
          {
            this.state.opinions.map( (opinion, index) => {
              return(
                <OpinionCard
                  key={ opinion.id }
                  title={ opinion.title }
                  option1={ opinion.option1 }
                  option2={ opinion.option2 }
                  onClick={ this.updateCurrentPage } />
              )
            })
          }
          <Col xs={12} md={4}></Col>
        </Row>
      </Grid>
    );
  }
}

export default OpinionIndex;
