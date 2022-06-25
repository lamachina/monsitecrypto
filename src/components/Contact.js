import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'


const Contact = () => {

    const [state, handleSubmit] = useForm("mgedbljz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <h1>Take a look at them</h1> <h1 className='lowh'> With our indicators</h1>
                    <p>Most searched cryptocurrencies in the last 24 hours.</p>
                    <p>Receive your access code to our Telegram Channel</p>
                </div>
                {/* Right Side */}
                <div className='right'>

                    <form className='fourmi' onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button className='btn' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>


            </div>
        </div >
    )
}

export default Contact;