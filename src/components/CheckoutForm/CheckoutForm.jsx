import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkoutForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/CartContext'
import { createBuyOrder } from '../../services/firestore';



const CheckoutForm = () => {
    const { cart, getItemPrice } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        checkEmail: ''
    });
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        const newFormData = { ...formData };
        newFormData[inputName] = inputValue;
        setFormData(newFormData);
    };
    const handleCheckout = (e) => {
        e.preventDefault();
        if (formData.email === formData.checkEmail) {
            delete formData.checkEmail;
            const orderData = {
                buyer: formData,
                items: cart,
                date: new Date(),
                total: getItemPrice()
            };
            createBuyOrder(orderData)
                .then(orderId => {
                    navigate(`/checkout/${orderId}`)
                })
        } else {
            setEmailError('Las direcciones de correo elentrónico deben coincidir')
        }

    };
    return (
        <div className='checkout-form'>
            <h3>Ingrese sus datos:</h3>
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label style={{ fontSize: '0.8em' }}>Nombre y Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre completo"
                        name='name'
                        onChange={handleInputChange}
                        value={formData.name}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label style={{ fontSize: '0.8em' }}>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cód. de área + número"
                        name='phone'
                        onChange={handleInputChange}
                        value={formData.phone}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontSize: '0.8em' }}>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ej: info@kitchenwarehouse.com"
                        name='email'
                        onChange={handleInputChange}
                        value={formData.email}
                        required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontSize: '0.8em' }}>Confirme su correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        name='checkEmail'
                        onChange={handleInputChange}
                        value={formData.checkEmail}
                        required />
                </Form.Group>
                <h5 style={{ color: 'red' }}>{emailError}</h5>
                <Form.Group className="mb-3" controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Acepto recibir novedades y promociones" style={{ fontSize: '0.8em' }} />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={!(formData.name !== '' && formData.phone !== '' && formData.email !== '' && formData.checkEmail !== '')}>
                    Finalizar compra
                </Button>
            </Form>
        </div>
    )
};

export default CheckoutForm;