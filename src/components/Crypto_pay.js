import React, { useState } from 'react'
import { ethers } from "ethers";
import "./Crypto_pay.css";


const Crypto_pay = () => {

    const [amount, setAmount] = useState(0); // new line

    const destinationAddress = "0x468197Ed39c5717FCC9aB8Ee4E1e0Af7A809536d"; // new line

    const [error, setError] = useState(""); //newline

    const [transactionHexR, setTransacHexR] = useState(0)
    const [payementFrom, setPayementFrom] = useState("")

    const getBalance = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        //get balance
        const balance = await provider.getBalance("0x468197Ed39c5717FCC9aB8Ee4E1e0Af7A809536d");
        const bignum = parseInt(balance._hex, 16)
        const cash = bignum / Math.pow(10, 18)
        console.log(cash);

        //get last transaction
        console.log(provider);
    }

    const startPayment = async (event) => { // new line

        console.log({ amount, destinationAddress });
        event.preventDefault()

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
            setTransacHexR(transactionResponse.value._hex)
            setPayementFrom(transactionResponse.from)

        } catch (error) {


            console.log({ error });
            setError(error.message); // new line

            if (error.code == 4001) {
                setError("You have refused the transaction")
            }
            if (error.code == "INSUFFICIENT_FUNDS") {
                setError("You need more money ! Think about gas fee")
            }
        }
    }

    return (
        <div className='content_pay'>


            {/* added onChange and onClick attributes */}


            <input className='amount' type="number" placeholder="Amount" value={amount} min="0" step="0.001" onChange={event => { setAmount(Number.parseFloat(event.target.value)) }} />
            {/*<input placeholder="Destination address" value={destinationAddress} onChange={event => { setDestinationAddress(event.target.value) }} />*/}

            <div className='price_section'>
                <button className="btnETH" onClick={event => { setAmount(0.005) }} > 0.005 $ETH</button>
                <button className="btnETH" onClick={event => { setAmount(0.01) }} > 0.01 $ETH</button>
                <button className="btnETH" onClick={event => { setAmount(0.03) }} > 0.03 $ETH</button>
                <button className="btnETH" onClick={event => { setAmount(0.1) }} > 0.1 $ETH</button>
            </div>

            <button className="btn" onClick={startPayment}>
                Send Payment !
            </button>

            {transactionHexR != 0 &&

                <div className='alert-succes'>
                    Thank you {payementFrom} ! You just sended :
                    {
                        parseInt(transactionHexR, 16) / 1000000000000000000
                    }
                    ETH
                </div>
            }

            {error &&

                <div className="alert-danger" role="alert">
                    {error}

                </div>

            }

            <div>
                <button onClick={getBalance}>Console log</button>
            </div>
        </div>
    )
}

export default Crypto_pay