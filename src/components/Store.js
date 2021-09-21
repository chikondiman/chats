import React from 'react'



const initState = {

    general: [
        {from: 'jayla', msg: 'hey baby'}, {from: 'juni', msg: 'belly rubs!'}
    ],

    topic2: [ 
        {from: 'jayla', msg: 'hey baby'}, {from: 'juni', msg: 'belly rubs!'}

    ]
}


function reducer(state, action) {
const {from, msg, topic} = action.payload;
 switch(action.type) {
    case 'RECEIVE_MESSAGE':

    export const CTX = React.createContext();
     return {
        ...state,
        [topic]: [
            ...state[topic],
        {from, msg}
     ]
 }

default:
    return state

    }
}

export default function Store(props)
{

    const reducerHook = React.useReducer(reducer, initState)
    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}

