import React from 'react'
import logo from './icons/logo.svg'
import faceBook from './icons/Fb.svg'
import Twitter from './icons/Tw.svg'
import Instagram from './icons/In.svg'
import './Footer.scss'

export default function Footer() {
    return (
        <>
            <div className='container'>
                <div className='footer-block'>
                    <img src={logo} alt="logo" />
                    <nav className='footer-menu'>
                        <a href='#'>Home</a>
                        <a href='#'>Product</a>
                        <a href='#'>About</a>
                    </nav>
                    <div className='follow'>
                        <h5>Follow Us :</h5>
                        <button><img src={faceBook} alt="logo" /></button>
                        <button className='btnTwitter'><img src={Twitter} alt="logo" /></button>
                        <button><img src={Instagram} alt="logo" /></button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <h5>Product by Elaman Zarlykov</h5>
            </div>
        </>
    )
}
