import React from 'react';
import { FETCHING_DATA, FETCH_COMPLETE, FETCH_FAILURE } from '../actions/index'

const initialState = {
 data: [
 
    {
  name: 'Vanity',
  age: 200,
  height: '5cm',
  id: 0   
 }
 
],
 
isFetching: false,
 error: ''

  
};


const reducer = (state=initialState, action) => {
    switch(action.type) {
    case FETCHING_DATA:
    return {
     ...state,
     isFetching: true,
     error: ''
    }
     
    case FETCH_COMPLETE:
    const newSmurf = {
     id: Date.now(),
     name: '',
     age: 200,
     height: ''
    }
    return {
        
     ...state,
     isFetching: false,
     error: '',
     data: action.payload
    }

    case FETCH_FAILURE:
     return {
     ...state,
     error: action.payload,
     isFetching: false
     }
    
    default: 
     return state
    }
} 
export default reducer;