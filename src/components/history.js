import React from 'react';
import '../design.css';
import {connect} from 'react-redux';

function NewHistory(props){
    return<div>
       <h4>History</h4>


       <div class='list'>
         {props.balanceReducer.transaction.map((t,index)=>{
          
          
           return<li className={t.amount<0 ? "expense":"income"}>{t.text}<span style={{'float':'right'}}>${t.amount}</span><button class='delete-btn' onClick={()=>{
            props.dispatch({
              type:'D',
              ID: index
            })
           } }>x</button></li>
         })}
       </div>
     </div>

}
export default connect(function(myStore){
  return myStore;
})(NewHistory);
