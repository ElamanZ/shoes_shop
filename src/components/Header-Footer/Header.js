import React from 'react'
import './Header.scss'
import logo from './icons/logo.svg'

export default function Header() {
    return (
        <div className='block'>
            <div className='container'>
                <div className='header-block'>
                    <img src={logo} alt="logo" />
                    <nav className='header-menu'>
                        <a href='#'>Home</a>
                        <a href='#'>Product</a>
                        <a href='#'>About</a>
                    </nav>
                    <button className='header-button'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}
