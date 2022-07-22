import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import './Ethscan.css'
import { FaArrowDown, FaEthereum } from 'react-icons/fa'
import { Tooltip, Paper } from '@material-ui/core';


const Ethscan = () => {



    const [transac, setTransac] = useState()
    const [resultat, setResultat] = useState()
    const [item, setItem] = useState()
    const [addToSearch, setAccount] = useState('0x468197Ed39c5717FCC9aB8Ee4E1e0Af7A809536d')

    const myadress = addToSearch //'0xe853c56864a2ebe4576a807d26fdc4a0ada51919'
    const api_key = '5CCJTE67NU61BCH65II2F9TVUR4VAK8VUD';
    const endpoint = `https://api.etherscan.io/api`;

    function logres() {

        axios
            .get(endpoint + `?module=account&action=txlist&address=${myadress}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${api_key}`)
            .then(res => {
                console.log('res -> ');
                console.log(res);

                const result = res.data.result


                setResultat(result, resultat)
                console.log('resultat');
                console.log(resultat);

                resultat.map((item, index) => {

                    var unixTime = item.timeStamp;
                    var date = new Date(unixTime * 1000);
                    var bignum = item.value
                    var cash = bignum / Math.pow(10, 18)

                    setItem(item)
                })








                //  const unixTime = res.data.result[1].timeStamp;
                //const date = new Date(unixTime * 1000);
                //  console.log(date.toLocaleDateString("fr-EU"));
                // const bignum = res.data.result[1].value
                //const cash = bignum / Math.pow(10, 18)
                //console.log("cash ->");
                //console.log(cash);


                /*setTransac({
                    From: res.data.result[1].from,
                    To: res.data.result[1].to,
                    BlockNum: res.data.result[1].blockNumber,
                    Date: date.toLocaleDateString("fr-EU"),
                    Value: cash
                })*/


                // console.log('test =>');
                //console.log(transac);
            }).catch((error) => {
                console.log(error)
            })


    }


    return (
        <div className='content_pay'>

            {/* added onChange and onClick attributes */}
            <h1>All transactions</h1>

            <div>
                <input onChange={event => { setAccount(event.target.value) }}></input>
                <button onClick={logres}>Console log</button>
            </div>



            {resultat &&

                resultat.map((item) =>
                    <Tooltip title={"Blocknumber:" + item.blockNumber + "\n >>> " + new Date(item.timeStamp * 1000).toLocaleDateString('fr-FR', { hour: "numeric", minute: "numeric" })} >

                        <li className={item.from == addToSearch ? 'liste_tri' : 'liste_tr'}>

                            <h4>{item.value / Math.pow(10, 18)} <FaEthereum /></h4>

                            <ul>{item.from}</ul>
                            <ul><FaArrowDown /></ul>
                            <ul>{item.to}</ul>

                        </li>
                    </Tooltip>


                )
            }
        </div >
    )
}

export default Ethscan