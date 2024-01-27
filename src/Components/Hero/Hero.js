import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'


export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt='hand_icon' />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>
                        Latest Collection
                        <img src={arrow_icon} alt='arrow_icon' />
                    </div>
                </div>
            </div>

            <div className='hero-right'>
                <img src={hero_img} alt='Lady_Hero_Pic' />
            </div>
        </div>
    )
}
