import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStates'



function Balance() {

const {transactions} = useContext(GlobalContext)
const amounts  = transactions.map( transaction => transaction.amount);
const balance = amounts.reduce( (acc, value)=>(acc+=value), 0 ).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  )
}

export default Balance