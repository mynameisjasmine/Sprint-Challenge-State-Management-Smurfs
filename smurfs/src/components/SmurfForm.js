import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList, postList } from '../actions/index';

const SmurfForm = props => {
 const [input, setInput] = useState('')
 const [age, setAge] = useState('')
 const [height, setHeight] = useState('')

 

  // const changeHandler = event => {
  //   setInput({
  //   ...input,
  //   [event.target.name]: event.target.value
  //   })
  
    
    // const changeHandler = event => {
    //     setInput(event.target.value);
    //     console.log('DATA:',props.data);
    //  }
    
    const addSmurfHandler = event => {
        event.preventDefault();
        console.log('FORM',input, age , height);
        props.postList({name: input, age: age, height: height})
        setInput('')
        setAge('')
        setHeight('')
       }
 
return (
 <form onSubmit={addSmurfHandler}> 
  
  <input
  type='text'
  value={input}
  name='name'
  placeholder='..add name'
  onChange={(e) => setInput(e.target.value)} 
  />  

<input
  type='text'
  value={age}
  name='age'
  placeholder='..add age'
  onChange={(e) => setAge(e.target.value)}  
  /> 

<input
  type='text'
  value={height}
  name='height'
  placeholder='..add height'
  onChange={(e) => setHeight(e.target.value)} 
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