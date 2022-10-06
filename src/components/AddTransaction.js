import React,{useState, useContext} from "react";
import {GlobalContext} from '../context/GlobalStates'




function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
  const { addTransaction} = useContext(GlobalContext)
    
  
const submitHandler = (event)=>{
  event.preventDefault(); 

  const newTransaction = {
   id: Math.floor(Math.random() * 10000000),
   text: text,
   amount : parseInt(amount)
  };
  console.log(newTransaction.id)
  addTransaction(newTransaction);
  

}

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit = {submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..."  value= {text} onChange = {(e)=> setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange = { (e)=>setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
