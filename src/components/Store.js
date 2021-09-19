import React from 'react'

export const CTX = React.createContext();

// const initState = {

//     general: [
//         {from: 'jayla', msg: 'hey baby'}, {from: 'juni', msg: 'belly rubs!'}
//     ],

//     topic2: [ 
//         {from: 'jayla', msg: 'hey baby'}, {from: 'juni', msg: 'belly rubs!'}

//     ]
// }


function reducer(state, action) {
 switch(action.type) {
    case 'RECEIVE_MESSAGE':
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

