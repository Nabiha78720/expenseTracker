import React, { useState } from 'react';
import '../design.css';
import {connect} from 'react-redux';
import myStore from '../store/store';



function Transaction(props){
  const [transaction,setTransaction]=useState({});

    return<div>
     <div class='lower'>
       <h4>Add New Transaction</h4>
     </div>
     <div>
       <h4>Text</h4>
       <input id='text' type='text' placeholder='Enter Text' class='width' onChange={(evt)=>{
         setTransaction({
          ...transaction,
        })
         setTransaction({
           ...transaction,
           text:evt.target.value
         })
         
       }}/>
       <h4>Amount</h4>
       <h3>(-ve = expense , +ve = income)</h3>
       <input id='amount' type='number' placeholder='Enter Amount' class='width' onChange={(evt)=>{
         const abc = parseFloat(evt.target.value, 10);
         setTransaction({
           ...transaction,
           amount: abc
         })
       }}/><br/><br/>
       <input class='btn' type='submit' value='Add Transaction' onClick={(evt)=>{
         let id = props.balanceReducer.transaction.length;
         props.dispatch({
           type: 'T',
           ID: id + 1,
           text: transaction.text,
           amount: transaction.amount
         })
       }}/>
     </div>
    </div>
}
export default connect(function(myStore){
  return myStore;
})(Transaction);
