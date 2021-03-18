
import './design.css';
import React,{useState} from 'react';
import Balance from './components/balance';
import History from './components/history';
import Transaction from './components/transaction';
import {Provider,connect} from 'react-redux';
import myStore from './store/store';

export default function App() {
  return <Provider store={myStore}>
      <div class='mid'>
        <h2>Expense Tracker</h2>
        <Balance/>
        <History/>
        <Transaction/>
      </div>
    </Provider>
  
};