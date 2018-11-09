import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    list: [],
    PaginationCurrent: 1,
    load: true,
    userinfo: {}
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.INIT_HOME_DATA) {
        return state.set('list',action.data)
    }
    if(action.type === actionTypes.CHANGE_PAGE) {
        return state.set('PaginationCurrent',action.page)
    }
    if(action.type === actionTypes.HANDLE_PAGE) {
        return state.set('PaginationCurrent',1)
    }
    if(action.type === actionTypes.CHANGE_LOAD_FALSE) {
        return state.set('load',false)
    }
    if(action.type === actionTypes.CHANGE_LOAD_TRUE) {
        return state.set('load',true)
    }
    if(action.type === actionTypes.INIT_USER_INFO) {
        return state.set('userinfo',action.data)
    }
    return state;
}