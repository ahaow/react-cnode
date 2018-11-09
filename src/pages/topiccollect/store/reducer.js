import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    userData: '',
    collectData: []
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.INIT_USER_DATA) {
        return state.set('userData',action.data)
    }
    if(action.type === actionTypes.INIT_TOPIC_COLLECT_DATA) {
        return state.set('collectData',action.data)
    }
    return state;
};