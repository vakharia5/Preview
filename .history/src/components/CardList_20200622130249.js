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
        <Card className="bg-dark text-white">
  <Card.Img src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw1XlgC_jQUdd6pFwMgZNEPH&ust=1592897540201000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjO9_XzlOoCFQAAAAAdAAAAABAD" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
      </div>
        )
        }
}
export default CardList