// Cart.jsx
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h2>Seu carrinho está vazio</h2>
                <Link to="/">
                    <button>Voltar para a loja</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Seu Carrinho</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x R${item.price.toFixed(2)}
                        <button onClick={() => removeItem(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h3>Preço Total: R${totalPrice.toFixed(2)}</h3>
            <button>Finalizar minha compra</button>
        </div>
    );
};

export default Cart;