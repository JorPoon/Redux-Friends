import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const GET_FRIENDS = "GET_FRIENDS";

export const login = creds => dispatch => {
    
    dispatch({type: LOGIN_START});
        return axios.post("http://localhost:5000/api/login", creds)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.payload);
                    dispatch({type: 'LOGIN_SUCCESS', payload: res.data.payload});
                    getFriends(dispatch);
                    console.log(getFriends)
                });
};

export const getFriends = dispatch => {
    dispatch({type: GETTING_FRIENDS});
     axios
        .get("http://localhost:5000/api/friends" , {
            headers:{Authorization: localStorage.getItem("token")}
        })
        .then(res => {
            console.log(res.data);
            dispatch({type: GET_FRIENDS, payload:res.data})
        })
        .catch(err => {
            console.log(err)
        })
    
}