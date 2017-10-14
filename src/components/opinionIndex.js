import React, { Component } from 'react'
import '../App.css'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import OpinionCard from '../components/opinionCard'

class OpinionIndex extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {
            this.props.data.opinions.map( (opinion, index) => {
              return(
                <OpinionCard
                  key={ opinion.id }
                  title={ opinion.title }
                  option1={ opinion.option1 }
                  option2={ opinion.option2 }
                  onClick={ this.props.updateCurrentPage("opinionShow") } />
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
