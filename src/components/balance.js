import React from 'react';
import '../design.css';
import {connect} from 'react-redux';


function Balance(props){
  let balance=0;
  let income=0;
  let expense=0;
    return<div>
      <h3>Your Balance</h3>
      {props.balanceReducer.transaction.map((t)=>{
        let a =t.amount;
        if(a<0){
            expense = expense + a;
        }
        else if(a>0){
            income = income + a;
        }else{
            console.log('Please Enter valid amount')
        }
        
        balance=income+ expense;
      })}
      <h2>${balance}</h2>
        <div class ='grid'>
          <div class='icon'>
            <h4>Income</h4>
            <h3 class='green'>${income}</h3>
          </div>
          <div class='icon'>
            <h4>Expense</h4>
            <h3 class='red'>${expense}</h3>
          </div>
        </div>
      
      </div>
}
export default connect(function(myStore){
  return myStore;
})(Balance);
