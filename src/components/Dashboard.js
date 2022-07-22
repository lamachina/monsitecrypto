import React, { useState } from "react";
import { ethers } from "ethers";
import './Dashboard.css'
import Crypto_pay from "./Crypto_pay";

function Dashboard() {

    // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
        address: '',
        Balance: null,
    });

    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(res => {
                    // Return the address of the wallet
                    console.log(res)

                    getbalance(res[0]);
                })



        } else {
            alert("install metamask extension!!");
        }
    };

    const logca = () => {
        console.log(data);
    }

    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    address: address,
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };



    return (
        <div className='hero'>

            <div className='container'>

                {/* Left Side */}
                <div className='left'>

                    <p className={data.Balance != null ? 'visible' : 'hide'}>address : {data.address} </p>
                    <p className={data.Balance != null ? 'visible' : 'hide'}>balance : {data.Balance} $</p>

                    <h1>Get your private key for </h1> <h1 className='lowh'> 0.1 ETH</h1>
                    <div className='input-container'>
                        {/*  <button onClick={btnhandler} variant="primary">
                            Connect to wallet
                        </button>
                        <button onClick={logca} variant="primary">
                            logca
                        </button>*/}
                    </div>
                </div>
                <div className='left'>


                    <div>
                        <Crypto_pay />


                    </div>

                </div>
            </div>
        </div >
    );
}

export default Dashboard;