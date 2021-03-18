import {createStore ,combineReducers} from 'redux';
let initialData ={
    transaction:[
        {ID:1,text:'abc',amount: 5000},
        {ID:2,text:'abc',amount: 544},
        {ID:3,text:'abc',amount: -544}
    ]
}




function balanceReducer(oldData=initialData,newData){
    oldData={...oldData};
    
    if(newData.type=='T'){
        oldData.transaction.push(newData)
    }
    if(newData.type=='D'){
        // console.log(newData)
        oldData.transaction.splice(newData.ID,1)
    }

    // console.log(oldData)
    return oldData;
}
let reducers = combineReducers({balanceReducer})
const myStore= createStore(reducers);
export default myStore;
