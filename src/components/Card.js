import React from 'react'
import cross1 from '../pages/ProductPage/icons/cross1.svg'

export default function Card() {
return (
    <div className='sneakers'>
        <div className='card'>
            <img width={290} height={160} className='cross1' src={cross1} alt="cross" />
            <h5>ALIQUAM LOBORTIS</h5>
            <div className='inner-card'>
                <span>Price:</span>
                <b>$75</b>
            </div>
            <button className='button-product'>
                SHOP NOW
            </button>
        </div>
            
    </div>
    )
}
