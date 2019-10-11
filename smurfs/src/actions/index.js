import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchList = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
}


// axios.get(``)