import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList, postList } from '../actions/index';

const SmurfForm = props => {
 const [input, setInput] = useState('')

 useEffect(() => {

 },[])
    
    const changeHandler = event => {
        setInput(event.target.value);
        console.log('DATA:',props.data);
     }
    
    const addSmurfHandler = event => {
        event.preventDefault();
        props.postList(input)
        setInput('')
       }
 
return (
 <form onSubmit={(event) => {
    addSmurfHandler(event)
  }}> 
  
  <input
  type='text'
  value={input}
  name='name'
  placeholder='..add name'
  onChange={changeHandler} 
  />  

<input
  type='text'
  value={input}
  name='age'
  placeholder='..add age'
  onChange={changeHandler} 
  /> 

<input
  type='text'
  value={input}
  name='height'
  placeholder='..add height'
  onChange={changeHandler} 
  /> 


  <button type="submit">Submit</button>
  
 </form>
 )
}

const mapStateToProps = state => {
 return {
  data: state.data,
  isFetching: state.isFetching,
  isPosting: state.isPosting,
  error: state.error
 };
};
export default connect(mapStateToProps, { fetchList, postList })(SmurfForm);