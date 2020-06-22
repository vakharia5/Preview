import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import img from '../assets/Images/download.jpg';

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
        <Card  border="secondary" style={{ width: '18rem' ,height : '1rem'}}>
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
      </div>
        )
        }
}
export default CardList