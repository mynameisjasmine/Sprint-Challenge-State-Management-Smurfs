import axios from 'axios';


export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchList = () => dispatch => {
    dispatch({ type: FETCHING_DATA })


 axios.get(`http://localhost:3333/smurfs`)
// .then(res => console.log(res))
.then(res => dispatch({ type: FETCH_COMPLETE, payload: res.data}))
.catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))

}


export const POSTING_DATA = 'POSTING_DATA';
export const POST_COMPLETE = 'POST_COMPLETE';
export const POST_FAILURE =  'POST_FAILURE';

export const postList = (smurf) => dispatch => {
    dispatch({ type: POSTING_DATA })

    axios.post('http://localhost:3333/smurfs', smurf)
    // .then(res => console.log(res))
.then(res => dispatch({ type: POST_COMPLETE, payload: res.data}))
.catch(err => dispatch({ type: POST_FAILURE, payload: err.response}))

}


