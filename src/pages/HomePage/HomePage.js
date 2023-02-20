import React from 'react'
import './HomePage.scss'
import logo from './icons/logo_green.svg'
import shoos1 from './icons/shoos.png'
import line from './icons/line.svg'
// import line from './icons/header-bg2.png'
import btn1 from './icons/button/btn1.svg'
import btn2 from './icons/button/btn2.svg'
import btn3 from './icons/button/btn3.svg'

export default function HomePage() {
  return (
    <>
        <div className='home-block'>
          <div className='container'>
            <div className='home-inner'>


              <div className='inner1'>
                <p className='title1'>Bring power to your steps. <img src={logo} alt="logo" /></p>
                <h1>Walk the line.</h1>
                <p>Now that you have a ready strategy to move forward,<br></br>it’s time to come up with some ideas. </p>
                <p>Now that you have a <span>ready strategy</span> to move forward,</p>
                <h3>Price : $125 <span>$169</span></h3>
                <button className='header-button'>Shop Now</button>
              </div>
              <div className='inner2'>
                <div className='img'>
                  <img className='img1' src={shoos1} alt="shoos" />
                  <img className='img2' src={line} alt="line" />
                  {/* <img className='img2' src={line} alt="line" /> */}
                </div>
                
                
              </div>
            </div>


            <div className='home-inner2'>
              <div className='inner3'>
                <div className='k70'>
                  <h1>70k</h1>
                  <p>CUSTOMERS</p>
                </div>
                <div className='k17'>
                  <h1>17k</h1>
                  <p>REVIEW</p>
                </div>
              </div>
              <div className='inner4'>
                <button className='btn1'><img src={btn1} alt="btn1" /></button>
                <button className='btn2'><img src={btn2} alt="btn2" /></button>
                <button className='btn3'><img src={btn3} alt="btn3" /></button>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
