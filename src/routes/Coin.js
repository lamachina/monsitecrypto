import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'

import './Coin.css'

const Coin = () => {

    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`


    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!coin)
        return null

    return (
        <div>
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}

                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                            <tr>

                                <th>{coin.market_data?.price_change_percentage_1h_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        1h
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        1h
                                    </span>
                                )}</th>
                                <th>{coin.market_data?.price_change_percentage_24h_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        24h
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        24h
                                    </span>
                                )}</th>
                                <th>{coin.market_data?.price_change_percentage_7d_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        7d
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        7d
                                    </span>
                                )}</th>
                                <th>{coin.market_data?.price_change_percentage_14d_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        14d
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        14d
                                    </span>
                                )}</th>
                                <th>{coin.market_data?.price_change_percentage_30d_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        30d
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        30d
                                    </span>
                                )}</th>
                                <th>{coin.market_data?.price_change_percentage_1y_in_currency.usd < 0 ? (
                                    <span className='red'>
                                        <FiArrowDownRight className='icon' />
                                        1y
                                    </span>
                                ) : (
                                    <span className='green'>
                                        <FiArrowUpRight className='icon' />
                                        1y
                                    </span>
                                )}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>

                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin
