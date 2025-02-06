import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './CartWidget';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div>
                    <CartWidget />
                    <Routes>
                        <Route path="/" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;