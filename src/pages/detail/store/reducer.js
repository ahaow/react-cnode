import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    data: {},
    author: {},
    replies: [],
    user_data: {},
    user_recent_replies: [],
    loadingShow: true
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.INIT_LOAD_SHOW) {
        return state.set('loadingShow',false)
    }
    if(action.type === actionTypes.SET_LOAD_SHOW) {
        return state.set('loadingShow',true)
    }
    if(action.type === actionTypes.INIT_DETAIL_DATA) {
        return state.set('data',action.data).set('author',action.author).set('replies',action.replies)
    }
    if(action.type === actionTypes.INIT_USER_DETAIL) {
        return state.set('user_data',action.user_data).set('user_recent_replies',action.user_recent_replies)
    }
    return state;
};