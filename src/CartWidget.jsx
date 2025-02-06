// CartWidget.js
import React from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
    const { totalItems } = useCart();

    // Não exibe o widget se não houver itens
    if (totalItems === 0) {
        return null;
    }

    return (
        <div>
            <span>🛒 {totalItems}</span>
        </div>
    );
};

export default CartWidget;