import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    UserData: '',
    has_read_messages: [],
    hasnot_read_messages: []
})

export default (state = defaultState, action) => {
    if(action.type === actionTypes.INIT_USER_DATA) {
        return state.set('UserData',action.data)
    }
    if(action.type === actionTypes.INIT_READ_DATA) {
        return state.set('has_read_messages',action.has_read_messages).set('hasnot_read_messages',action.hasnot_read_messages);
    }
    return state;
}