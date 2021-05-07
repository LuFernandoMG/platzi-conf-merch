import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
        <div className="home">
            <Products products={initialState.products} />
        </div>
    )

export default Home;