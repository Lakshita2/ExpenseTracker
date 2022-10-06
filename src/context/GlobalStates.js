import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import Header from "../components/Header"
import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";


const initialState = {
  transactions: [ ],
};
export const GlobalContext = React.createContext(initialState);


export const GlobalProvider = ( {children})=>{   //note this
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  function deleteTransaction(id){
    dispatch({
      type: "DELETE_TRANSACTION",
      payload : id
    });
  }

  function addTransaction(transaction){
    dispatch({
      type: "ADD_TRANSACTION",
      payload : transaction
    });
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction: deleteTransaction, addTransaction}}>
      {children}
    </GlobalContext.Provider>
  )
}



