import axios from 'axios';
import * as actionTypes from './actionTypes'

export const getUserDataAction = (data) => {
    return {
        type: actionTypes.INIT_USER_DATA,
        data,
    }
}


export const getTopicCollectAction = (data) => {
    return {
        type: actionTypes.INIT_TOPIC_COLLECT_DATA,
        data,
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

export const getTopicCollect = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/topic_collect/${loginname}`).then((res) => {
            console.log(res)
            if(res.data.success) {
                dispatch(getTopicCollectAction(res.data.data))
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}



