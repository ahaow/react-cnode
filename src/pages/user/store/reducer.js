import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    data: {},
    recent_replies: [],
    recent_topics: [],
    user_collect: 0
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.INIT_USER_DATA) {
        return state.set('data',action.data).set('recent_replies',action.recent_replies).set('recent_topics',action.recent_topics)
    }
    if(action.type === actionTypes.INIT_USER_COLLECT_DATA) {
        return state.set('user_collect',action.length);
    }
    return state;
};