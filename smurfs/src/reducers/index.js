import React from 'react';
import { FETCHING_DATA, FETCH_COMPLETE, FETCH_FAILURE, POSTING_DATA, POST_COMPLETE, POST_FAILURE } from '../actions/index'

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
 error: '',
isPosting: false

  
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

     case POSTING_DATA:
     const newSmurf = {
        name: 'Vanity',
        age: 200,
        height: '5cm',
        id: Date.now()
      

     }
     
     return {
     ...state,
     isPosting: true,
     data: [...state.data, newSmurf],
     error: ''
     
     }

     case POST_COMPLETE:
     
     return {
     ...state,
     data: action.payload,
     isPosting: false,
     error: '',
     
     }

     case POST_FAILURE:
     return {
     ...state,
     error: action.payload,
     isPosting: false
     }
    
    default: 
     return state
    }
} 
export default reducer;