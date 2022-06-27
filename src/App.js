import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Navigate } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strategies from './components/Strategies'
import Contact from "./components/Contact";
import Dashboard from './components/Dashboard'

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/list' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/hero' element={<Hero />} />
        <Route path='/strategies' element={<Strategies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/hero" />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>


    </>
  );
}

export default App;
