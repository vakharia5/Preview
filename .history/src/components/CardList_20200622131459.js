import React, { Component } from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import img from '../assets/Images/download.jpg';

class CardList extends Component {
    render() {
        return (
   <div>
       <Container>
       <Row>
        <Card  border="secondary" style={{ width: '15rem' ,height : '20rem'}}>
  <Card.Img src={img} alt="Card image" style={{ width: '15rem' ,height : '20rem'}} />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 <br />
 <Card  border="secondary" style={{ width: '15rem' ,height : '20rem'}}>
  <Card.Img src={img} alt="Card image" style={{ width: '15rem' ,height : '20rem'}} />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 <br />
 <Card  border="secondary" style={{ width: '15rem' ,height : '20rem'}}>
  <Card.Img src={img} alt="Card image" style={{ width: '15rem' ,height : '20rem'}} />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 <br />
 <Card  border="secondary" style={{ width: '15rem' ,height : '20rem'}}>
  <Card.Img src={img} alt="Card image" style={{ width: '15rem' ,height : '20rem'}} />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 <br />
 </Row>
 </Container>
      </div>
        )
        }
}
export default CardList