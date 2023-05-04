import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './checkout.css';
import { getBuyOrder } from '../../services/firestore';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import LoadSpinner from '../Spinner/Spinner';
import { CartContext } from '../../context/CartContext';


const Checkout = () => {
  const [orderData, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { emptyCart } = useContext(CartContext);
  const { orderId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getBuyOrder(orderId)
      .then(data => setOrder(data))
      .finally(() => setIsLoading(false), emptyCart())
  }, []);
  return (
    <>
      {isLoading ? <LoadSpinner /> :
        <div className='checkout-container'>
          <h2> ¡Gracias por tu compra!</h2>
          <h3> ¡Tu orden con Nro. <strong>{orderId}</strong> fue generada con éxito!</h3>
          <h4>Resumen:</h4>
          <p><strong>Nombre:</strong> {orderData.buyer?.name || 'cargando...'}</p>
          <p><strong>Teléfono:</strong> {orderData.buyer?.phone}</p>
          <p><strong>Correo electrónico:</strong> {orderData.buyer?.email}</p>
          <Table striped bordered hover responsive style={{ margin: 'auto', verticalAlign: 'middle', textAlign: 'center' }}>
            <thead style={{ backgroundColor: '#8f033b' }}>
              <tr style={{ color: 'white' }}>
                <th></th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Total: ${orderData.total?.toLocaleString('ES-AR')}</th>
              </tr>
            </tfoot>
            <tbody>
              {orderData.items?.map((item, i) => {
                return <tr key={i}>
                  <td><Image src={item.image} width='90vh' alt='Imagen de Producto' /></td>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>${(item.price).toLocaleString('es-AR')}</td>
                  <td>${(item.price * item.qty).toLocaleString('es-AR')}</td>
                </tr>
              })}
            </tbody>
          </Table>
        </div>}
    </>

  )
}

export default Checkout;