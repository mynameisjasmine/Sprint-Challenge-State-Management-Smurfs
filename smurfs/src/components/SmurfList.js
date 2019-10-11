import React, { useEffect } from 'react';
import Smurfs from './Smurfs';
import { fetchList } from '../actions/index';
import { connect } from 'react-redux';

const SmurfList = props => {
 
useEffect(() => {
props.fetchList()
}, []);

if(props.isFetching) {
return <h2>Loading...</h2>
}

 return (
  <div>
  {props.error && <p>{props.error}</p>}
  {props.data.map(items => (
    <Smurfs key={items.id} items={items}/>   
  ))}
  </div>
)
};

const mapStateToProps = state => {
 return {
  data: state.data,
  isFetching: state.isFetching,
  error: state.error
 };
};

export default connect(mapStateToProps, {fetchList})(SmurfList);