import React,{createContext,useContext,useReducer} from 'react'


export const StateContext=createContext();

export const StateProvider=(props)=>(

    <StateContext.Provider value={useReducer(props.reducer,props.initialState)}>
        {props.children}
      
    </StateContext.Provider>

)

export const useStateValue=()=>useContext(StateContext)