import * as actions from './actions'
import axios from "axios";


export const middlewareFunctions = ({ dispatch, getState }) => next => action => {

    if (action.type === "SIGNUP") {
        const headers = {
            'Content-Type': 'application/json',
        }
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/api/auth/signup', action.payload, headers)
                .then(async (response) => {
                    console.log(response)
                    if (response.data.success === true) {
                        //only if you have domain:
                        // let date = new Date(Date.now() + 30);
                        // date = date.toUTCString();
                        // let expires = "expires=" + date;
                        // document.cookie = "jwt" + "=" + response.data.token + ';' + expires;
                        await dispatch(actions.setToken(response.data.token));
                        await dispatch(actions.getAllCandidates());
                        resolve(response.data.success);
                    }
                        resolve(response.data.success);
                }).catch(err => reject(err.success));
        })
    }

    if (action.type === "SIGNIN") {
        return new Promise(function (resolve, reject) {
            axios.post('http://localhost:8080/api/auth/signin', action.payload)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.success === true) {
                        dispatch(actions.setToken(response.data.token));
                        dispatch(actions.getAllCandidates());}
                        resolve(response.data.success);
                }).catch(err => { reject(err.success); });
        })
    }

    if (action.type === "GET_ALL_CANDIDATES") {
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'authorization': getState().userReducer.token
        // }
        axios.get('http://localhost:8080/api/candidates', {
            headers: {
                'authorization': getState().userReducer.token
            }
        })
            .then((response) => {
                console.log(response)
                if (response.data.success === true) {
                    dispatch(actions.setCandidates(response.data.candidates));
                }
            }).catch(err => { console.log(err) });
    }

    return next(action);
}