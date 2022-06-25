import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <Link to='/'><h1 className='secondary'>Nua<span className='primary'>Da</span></h1></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/hero'>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/list'> <p >List</p></Link>
                    </li>
                    <li>
                        <Link to='/strategies'> <p >Strategies</p></Link>
                    </li>
                    <li>
                        <Link to='/contact'> <p >Contact</p></Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>
        </div>



    )
}

export default Navbar
