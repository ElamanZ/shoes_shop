import React from 'react'
import { useState } from 'react';

import './CartItem.scss'
import cross1 from './iconsCartItem/cross1.svg'
import close from './iconsCartItem/close.png'



export default function CartItem() {
    const [count, setCount] = useState(0);
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='product-title'>
                    <h2>Cart Item</h2>
                    <button><img width={20} height={20} src={close} alt="close" /></button>
                </div>

                <div className='cart-product'>
                    <img width={150} height={100} src={cross1} alt="cross" />
                    <div>
                        <p>ALIQUAM LOBORTIS</p>
                        <b>$75</b>

                    </div>
                    <div className='counter'>
                        <div className='button__wrapper'>
                            <button onClick={() => setCount(count - 1)}>-</button>
                        </div>
                        <h1 className='count'>{count}</h1>
                        <div className='button__wrapper'>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>
                    <div>
                        <button className='product-btn'><img width={20} height={20} src={close} alt="close" /></button>
                    </div>
                </div>
                
                <div className='bottom-block'>
                    <div className='cart-total-block'>
                        <span>Total:</span>
                        <div className='border'></div>
                        <b>$75</b>
                    </div>
                    <button className='checkout'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}
