import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class CardMovie extends Component {
    constructor(props) {
        super(props);
        this.props={
          Title:'',Img:'' , Synopsis:''
        } 
    }
    
  render() {
    return (

         <div className='col-12 col-md-6 col-lg-4 align-center'>
          <Card className='cardMovie'>
          <Card.Img variant="top" src={this.props.Img}/>
          <Card.Body>
            <Card.Title>{this.props.Title} </Card.Title>
            <Card.Text>
              {this.props.Synopsis}.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
          </Card>
        </div>
 
    )
  }
}
