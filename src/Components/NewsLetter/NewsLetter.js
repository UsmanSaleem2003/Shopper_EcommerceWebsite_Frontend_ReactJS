import React from 'react'
import "./NewsLetter.css"

export default function NewsLetter() {
    return (
        <div className='news-letter'>
            <h1>Get Exlusive Offers On Your Email</h1>
            <p>Subscirbe to our newsletter and stay updated</p>
            <div>
                <input type='email' placeholder='Your Email ID' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
