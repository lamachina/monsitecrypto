import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import './Hero.css'

const Hero = () => {

    const params = useParams()
    const [coin, setCoin] = useState()

    const url = `https://api.coingecko.com/api/v3/search/trending`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(coin);

    if (!coin)
        return null

    else
        return (
            <div className='hero'>
                <div className='container'>

                    {/* Left Side */}
                    <div className='left'>
                        <p>Most searched cryptocurrencies in the last 24 hours.</p>
                        <h1>Take a look at them</h1> <h1 className='lowh'> With our indicators</h1>
                        <p>Receive your access code to our Telegram Channel</p>
                        <div className='input-container'>
                            <input type='email' placeholder='Enter your email' />
                            <button className='btn'>Learn More</button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='right'>
                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[0].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[0].item.symbol}</h5>
                                <p># {coin.coins[0].item.market_cap_rank}</p>
                            </div>
                        </div>


                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[1].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[1].item.symbol}</h5>
                                <p># {coin.coins[1].item.market_cap_rank}</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[2].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[2].item.symbol}</h5>
                                <p># {coin.coins[2].item.market_cap_rank}</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[3].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[3].item.symbol}</h5>
                                <p># {coin.coins[3].item.market_cap_rank}</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[4].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[4].item.symbol}</h5>
                                <p># {coin.coins[4].item.market_cap_rank}</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='top'>
                                {<img src={coin.coins[5].item.large} alt='/' />}
                            </div>
                            <div>
                                <h5>{coin.coins[5].item.symbol}</h5>
                                <p># {coin.coins[5].item.market_cap_rank}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
}

export default Hero