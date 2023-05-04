import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getSingleItem } from '../../services/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import LoadSpinner from '../Spinner/Spinner';
import Button from 'react-bootstrap/Button';

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    getSingleItem(id)
      .then(data => {
        setItem(data)
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (item === undefined) {
    return (
      <>
        <div>
          <h2 style={{ color: "#aa0033" }}>Item no encontrado</h2>
          <Button as={Link} to='/'>Volver al home</Button>
        </div>
      </>
    );
  }
  return (
    <Container fluid >
      {isLoading ? <LoadSpinner /> :
        <ItemDetail item={item} />}
    </Container>
  )
}

export default ItemDetailContainer