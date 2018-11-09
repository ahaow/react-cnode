import axios from 'axios';
import * as actionTypes from './actionTypes'
export const getUserDataAction = (data,recent_replies,recent_topics) => {
    return {
        type: actionTypes.INIT_USER_DATA,
        data,
        recent_replies,
        recent_topics,
    }
}

export const getUserCollectionAction = (length) => {
    return {
        type: actionTypes.INIT_USER_COLLECT_DATA,
        length
    }
}

export const getUserData = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then((res) => {
            if(res.data.success) {
                dispatch(getUserDataAction(res.data.data,res.data.data.recent_replies,res.data.data.recent_topics))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const getUserCollection = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/topic_collect/${loginname}`).then((res) => {
            if(res.data.success) {
                dispatch(getUserCollectionAction(res.data.data.length))
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}

