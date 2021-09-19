import React from 'react'

const CTX = React.createContext();

const initState = {

    general: [
        {from: 'jayla', msg: 'hey baby'}, {from: 'juni', msg: 'belly rubs!'}, {msg}, {newmsg}
    ],

    topic2: [

    ]
}


function reducer(state, action) {
 switch(action.type) {
    case 'RECEIVE_MESSAGE':
     return {
        ...state.
        [topic]: [
            ...state[topic],
        {from, msg}
     ]
 }

default:
    return state

    }
}

export default function Store()
{

    const reducerHook = React.useReducer(reducer, iniState)
    return (
        <CTX.Provider value ={}>
            {props.children}
        </CTX.Provider>
    )
}

function