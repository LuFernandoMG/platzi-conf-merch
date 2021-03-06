import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import handleSumTotal from '../utils/handleSumTotal';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {

    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = (product, idx) => () => {
        removeFromCart(product, idx);
    }

    return (
        <>
            <Helmet>
                <title>Checkout over your products - Platzi Conf Merch</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@TU_USER" />
                <meta name="twitter:creator" content="@TU_USER" />
                <meta name="twitter:title" content="Platzi Conf Store" />
                <meta name="twitter:description" content="Platzi Conf Store" />
                <meta
                    name="twitter:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store" />
                <meta property="og:description" content="Platzi Conf Store" />
                <meta
                    property="og:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>
            <div className="Checkout">
                <div className="Checkout-content">
                    <h3>{cart.length > 0 ? 'Lista de pedidos: ' : 'Sin pedidos...'}</h3>
                    {cart.map((item, idx) => (
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                {' - '}
                                <span>${item.price}</span>
                            </div>
                            <button type='button' aria-label='remove element' onClick={handleRemove(item, idx)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
                        <Link to='/checkout/information'>
                            <button type='button'>Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout;