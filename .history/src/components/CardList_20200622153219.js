import React, { Component } from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import img from '../assets/Images/download.jpg';
import Data from '../assets/data.json';

class CardList extends Component {
    render() {
      
        return (
   <div> 
   <Container>
   <Row sm={1} md={2} lg={4}>
    {console.log(Data)}
    { Data.map(data => 
    <Card  border="light" >
      <Card.Img src={data.image} alt="Card image" className = "Image" />
      <Card.ImgOverlay>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        {data.name}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>)
        
}       

</Row>
</Container>
      </div>
        )
        }
}
export default CardList