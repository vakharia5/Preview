import React, { Component } from 'react'
import {Card} from 'react-bootstrap';

class CardList extends Component {
    render() {
        return (
   <div>
         
      
        <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
        )
        }
}
export default CardList