import React, { useEffect } from 'react';
import Smurfs from './Smurfs';
import { fetchList } from '../actions/index';
import { connect } from 'react-redux';

const SmurfList = props => {
 console.log('SMURFLIST', props);
useEffect(() => {
props.fetchList()

}, []);
console.log('DATA 2',props.data);
if(props.isFetching) {
return <h2>Loading...</h2>
}

 return (
 <> 
  <div>
  {/* {props.error && <p>{props.error}</p>} */}
  
  {props.data.length > 0 && props.data.map(items => (
    <Smurfs key={items.id} items={items}/> 

  ))}
  </div>
  </>
)
};

const mapStateToProps = state => {
 return {
  data: state.data,
  isFetching: state.isFetching,
  isPosting: state.isPosting,
  error: state.error
 };
};

export default connect(mapStateToProps, { fetchList })(SmurfList);