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
                    <h1>Contact us</h1> <h1 className='lowh'> For trading solution</h1>
                    <p>Book a reservation with our team</p>
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