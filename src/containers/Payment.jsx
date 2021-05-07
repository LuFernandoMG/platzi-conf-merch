import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import handleSumTotal from '../utils/handleSumTotal';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
    const history = useHistory();
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const paypalOptions = {
        clientId: process.env.REACT_APP_PAYPAL_CLIENT,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        style: {
            layout: 'vertical',
            shape: 'react'
        }
    }

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }

            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }
    
    return ( 
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div>
                    <span>
                        <h4>
                            Total del pedido: $ {handleSumTotal(cart)}
                        </h4>
                    </span>
                </div>
            </div>
            <div className="Payment-sidebar">
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={() => console.log('Start payment')}
                        onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                        onPaymentError={(error) => console.log(error)}
                        onPaymentCancel={(data) => console.log(data)}
                    />
                </div>
            </div>
        </div>
     )}
 
export default Payment;