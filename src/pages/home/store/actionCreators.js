import axios from 'axios'
import * as actionTypes from './actionTypes'
// import { fromJS } from 'immutable';
import { topic } from '../../../api';

const initHomeListData = (data) => {
    return {
        type: actionTypes.INIT_HOME_DATA,
        data: data,
    }
}

export const change_page = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}

export const handle_page = () => {
    return {
        type: actionTypes.HANDLE_PAGE,
    }
}

export const change_load_false = () => {
    return {
        type: actionTypes.CHANGE_LOAD_FALSE
    }
}

export const change_load_true = () => {
    return {
        type: actionTypes.CHANGE_LOAD_TRUE
    }
}

export const initUserInfo = (data) => {
    return {
        type: actionTypes.INIT_USER_INFO,
        data
    }
}

// 获取首页 用户信息
export const init_user_info = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then((res) =>{
            if(res.data.success) {
                dispatch(initUserInfo(res.data.data))
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

// 获取数据列表
export const getHomeList = (id,page) => {
    return (dispatch) => {
        axios.get(`${topic}?tab=${id}&limit=40&page=${page}`).then((res) => {
            const result = res.data.data;
            if(res.data.success) {
                dispatch(change_load_false());
                dispatch(initHomeListData(result))
            }
        }).catch((err) => {
            console.log('数据请求失败');
        })
    }
}