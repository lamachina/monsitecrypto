import React, { useState } from 'react'
import { ethers } from "ethers";


const Crypto_pay = () => {

    const [amount, setAmount] = useState(0); // new line

    const destinationAddress = "0x468197Ed39c5717FCC9aB8Ee4E1e0Af7A809536d"; // new line

    const [error, setError] = useState(""); //newline

    const startPayment = async (event) => { // new line



        console.log({ amount, destinationAddress });
        event.preventDefault();

        try {

            if (!window.ethereum) {
                throw new Error("No crypto wallet found. Please install it.");
            }

            await window.ethereum.send("eth_requestAccounts");

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const signer = provider.getSigner();

            ethers.utils.getAddress(destinationAddress);

            const transactionResponse = await signer.sendTransaction({

                to: destinationAddress,

                value: ethers.utils.parseEther(amount.toString())

            });

            console.log({ transactionResponse });

        } catch (error) {

            console.log({ error });
            setError(error.message); // new line

        }

    }

    return (
        <div>

            {/* added onChange and onClick attributes */}
            <input type="number" placeholder="Amount" value={amount} onChange={event => { setAmount(Number.parseFloat(event.target.value)) }} />
            {/*<input placeholder="Destination address" value={destinationAddress} onChange={event => { setDestinationAddress(event.target.value) }} />*/}
            <button className="btn" onClick={startPayment}>
                Send Payment !
            </button>


            {error &&

                <div className="alert alert-danger" role="alert">

                    {JSON.stringify(error)}

                </div>

            }
        </div>
    )
}

export default Crypto_pay