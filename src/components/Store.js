import React from 'react'

const CTX = React.createContext();


function reducer(state, action) {
 switch(action.type) {
    case 'RECEIVE_MESSAGE':
     return {

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