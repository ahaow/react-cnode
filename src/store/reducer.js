import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from './../pages/home/store'
import { reducer as detailReducer } from './../pages/detail/store'
import { reducer as newtopicReducer } from './../pages/newtopic/store'
import { reducer as edittopicReducer } from './../pages/edittopic/store'
import { reducer as userReducer } from './../pages/user/store'
import { reducer as topicCollectReducer } from './../pages/topiccollect/store'

const reducer = combineReducers({
    homeReducer,
    detailReducer,
    newtopicReducer,
    edittopicReducer,
    userReducer,
    topicCollectReducer
})

export default reducer;