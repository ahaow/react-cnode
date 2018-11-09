import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    tabValue: '',
    inputValue: '',
    success: false,
    topic_id: ''
})

export default (state = defaultState , action) => {
    if(action.type === actionTypes.CHNAGE_TAB_VALUE) {
      return state.set('tabValue',action.value);
    }
    if(action.type === actionTypes.CHNAGE_INPUT_VALUE) {
      // console.log(action.value.length)
      return state.set('inputValue',action.value);
    }
    if(action.type === actionTypes.NEW_TOPICS) {
      // console.log(action.value.length)
      return state.set('topic_id',action.topic_id).set('success',true);
    }
    return state;
};