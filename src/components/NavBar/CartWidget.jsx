import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {

  const { getItemQty } = useContext(CartContext);
  return (
    <div className='d-flex align-items-center' style={{ paddingLeft: '3em' }}>
      <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
      <Badge bg='warning' style={{ marginLeft: '1em', color: '#212121' }}>{getItemQty() > 0 && getItemQty()}</Badge>
    </div>
  )
}
