import axios from 'axios';
import * as actionTypes from './actionTypes'

export const getUserDataAction = (data) => {
    return {
        type: actionTypes.INIT_USER_DATA,
        data
    }
}
export const getUserData = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then((res) => {
            if(res.data.success) {
                dispatch(getUserDataAction(res.data.data));
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const getUnreadMsgAction = (has_read_messages,hasnot_read_messages) => {
    return {
        type: actionTypes.INIT_READ_DATA,
        has_read_messages,
        hasnot_read_messages
    }
}

export const getUnreadMsg = (token) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/messages?accesstoken=${token}`).then((res) => {
            if(res.data.success) {
                dispatch(getUnreadMsgAction(res.data.data.has_read_messages,res.data.data.hasnot_read_messages))
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}