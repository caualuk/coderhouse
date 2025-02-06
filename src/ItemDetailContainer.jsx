// ItemDetailContainer.js
import React, { useState } from 'react';
import { useCart } from './CartContext';

const ItemDetailContainer = () => {
    const { addItem, cart } = useCart();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        addItem({ id: 1, name: 'Camisa', price: 50, quantity });
    };

    const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <h2>Detalhes do Item</h2>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="0"
            />
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
            {totalItemsInCart > 0 && <button>Finalizar minha compra</button>}
        </div>
    );
};

export default ItemDetailContainer;