import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <>
      <Card style={{ width: '22rem', margin: '2%', textDecoration: 'none' }}>
        <Card.Img variant="top" src={item.image} className='product-image' />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            ${item.price}
          </Card.Text>
        </Card.Body>
        <Button as={Link} to={`/item/${item.id}`} variant='outline-secondary' style={{ fontWeight: 'bold' }}>Ver más</Button>
      </Card>
    </>
  )
}

export default Item;