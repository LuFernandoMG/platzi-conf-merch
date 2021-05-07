import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload, index) => {
        setState({
            ...state,
            cart: state.cart.filter((item, idx) => idx !== index)
        });
    };

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addNewOrder,
        addToCart,
        removeFromCart,
        addToBuyer,
        state
    }
};

export default useInitialState;
