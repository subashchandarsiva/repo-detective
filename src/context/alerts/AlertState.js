import React,{useReducer} from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {
   SET_ALERT,
   REMOVE_ALERT
} from '../Types'

const AlertState = props =>{
    const initialState =null

    const [state, dispatch] = useReducer(alertReducer, initialState)

  
  const setAlert =(msg,type)=>{
     dispatch({type:SET_ALERT,payload:{msg,type}})

    setTimeout(()=>{
      // this.setState({alert:null})
      dispatch({type:REMOVE_ALERT})
    },2000)
  
  }
   return  <alertContext.Provider
   value={{
       alert:state,
       setAlert
   }}
   >
        {props.children}

   </alertContext.Provider>
}

export default AlertState