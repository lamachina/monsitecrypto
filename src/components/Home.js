import React from 'react'
import './Home.css'


const Signup = () => {
    return (


        <div className='signup bgi'>
            <div className='container'>
                {/* left */}
                <div className='left'>

                    <h2>All free strategies.</h2>
                    <br></br>
                    <p><a href="https://www.tradingview.com/script/RZgvweBp/">Slow-Reversal strategy</a></p>
                </div>

                {/* right */}
                <div className='right'>
                    <h2 className='third'>Outperform the market</h2>
                    <p>Enjoy our personalized trading solutions. <br></br>With an average <strong>Max Run-Up of 80% </strong>
                        and a <em>Withdraw Down of around 35%</em>,<br></br>
                        our trading bots give you the <strong>speed</strong> to reach overvalued targets,
                        as well as the <strong>security</strong> of capital thanks to our programmed stop losses.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup