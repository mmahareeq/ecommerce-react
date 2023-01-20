import React, { useContext } from 'react'
import CartContent from '../components/CartContent';
import { CartContext } from '../utils/CartContext.js';
import PageHero from '../components/PageHero'

export default function CartPage() {
    const CartProduct = useContext(CartContext)
    { console.log(CartProduct) }

    return (
        <main>
            <PageHero tittle='Cart' />
            <div className="page section-body" style={{ justifyContent: 'center' }}>
                {console.log(CartProduct.cart)}

                <CartContent></CartContent>

            </div>
        </main>

    )
}
