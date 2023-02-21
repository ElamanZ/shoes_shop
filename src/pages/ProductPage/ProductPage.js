import React from 'react'
import './Product.scss'
import cross1 from './icons/cross1.svg'
import cross2 from './icons/cross2.svg'
import cross3 from './icons/cross3.svg'
export default function ProductPage() {
  return (
    <div>
      <div className='container'>
        <div className='product-block'>
          <div className='title-product'>
            <h1>Our Latest Product</h1>
            <p>Now that you have a ready strategy to move forward, it’s time to<br></br>come up with some ideas.</p>
          </div>
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
            <div className='card'>
              <img width={290} height={160} className='cross1' src={cross2} alt="cross" />
              <h5>FUSCE ALIQUAM</h5>
              <div className='inner-card'>
                <span>Price:</span>
                <b>$65</b>
              </div>
              <button className='button-product'>
                SHOP NOW
              </button>
            </div>
            <div className='card'>
              <img width={290} height={160} className='cross1' src={cross3} alt="cross" />
              <h5>AIR SUPERIORITY</h5>
              <div className='inner-card'>
                <span>Price:</span>
                <b>$45</b>
              </div>
              <button className='button-product'>
                SHOP NOW
              </button>
            </div>
          </div>
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
            <div className='card'>
              <img width={290} height={160} className='cross1' src={cross2} alt="cross" />
              <h5>FUSCE ALIQUAM</h5>
              <div className='inner-card'>
                <span>Price:</span>
                <b>$65</b>
              </div>
              <button className='button-product'>
                SHOP NOW
              </button>
            </div>
            <div className='card'>
              <img width={290} height={160} className='cross1' src={cross3} alt="cross" />
              <h5>AIR SUPERIORITY</h5>
              <div className='inner-card'>
                <span>Price:</span>
                <b>$45</b>
              </div>
              <button className='button-product'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
