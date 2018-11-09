import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    data: '',
    tabValue: '',
    inputValue: '',
    textAreaValue: ''
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.GET_TOPIC_DATA) {
      return state.set('data',action.data).set('tabValue',action.tabValue).set('inputValue',action.inputValue).set('textAreaValue',action.textAreaValue);
    }
    if(action.type === actionTypes.CHNAGE_TAB_VALUE) {
      return state.set('tabValue',action.value);
    }
    if(action.type === actionTypes.CHNAGE_INPUT_VALUE) {
      return state.set('inputValue',action.value);
    }
    if(action.type === actionTypes.CHNAGE_TEXTAREA_VALUE) {
      return state.set('textAreaValue',action.value);
    }
    return state;
};