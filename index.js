//initializing redux to this project
const redux = require('redux');

// console.log(redux);

//State
const InitState={
    num:0,
}
//Reducer
const rootReducer=(state=InitState,action)=>{
    if(action.type==='INC_NUM'){
        return({
            ...state,
            num:state.num+1,
        })
    }
    else if(action.type==='ADD_NUM'){
        return({
            ...state,
            num:state.num+action.value,
        })
    }
    else if(action.type==='DEC_NUM'){
        return({
            ...state,
            num:state.num-1,
        })
    }
    else return({
        ...state
    })
} 
//creating Store
const store= redux.createStore(rootReducer);

//console.log(store.getState())  //undefined
//getting current state
console.log(store.getState());//{ num : 0 }

//Subscribe
store.subscribe(()=>{
    console.log("[Subscribe]:",store.getState());
});


//Dispatching Action
store.dispatch({
    type:'INC_NUM',
    
});
store.dispatch({
    type:'ADD_NUM',
    value:34,
});
store.dispatch({
    type:'DEC_NUM',
});

console.log(store.getState());//{ num : 35 }