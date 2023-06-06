import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {  BsStar } from "react-icons/bs";


const FilmCard = ({title, description, imageUrl, date,rate}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{date}</ListGroup.Item>
        <ListGroup.Item ><BsStar style={{ color: "#FFD700" }}/>{rate}</ListGroup.Item>

      </ListGroup>
    </Card>
    </div>
  )
}

export default FilmCard
