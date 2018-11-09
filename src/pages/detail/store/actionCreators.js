import axios from 'axios';
import * as actionTypes from './actionTypes'

export const load_show = () => {
    return {
        type: actionTypes.INIT_LOAD_SHOW,
    }
}

export const setLoadShow = () => {
    return {
        type: actionTypes.SET_LOAD_SHOW,
    }
}


// 获取主题详情
export const init_detail_data = (data,author,replies) => {
   return {
       type: actionTypes.INIT_DETAIL_DATA,
       data,
       author,
       replies
   }
}

export const getDetailData = (topicId,token) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/topic/${topicId}?accesstoken=${token}`,{
            mdrender: true,
            accesstoken: token
        }).then((res) => {
            if(res.data.success) {
                // console.log(res.data.data);
                dispatch(init_detail_data(res.data.data,res.data.data.author,res.data.data.replies))
                dispatch(load_show());
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}

// 获取用户详情

export const init_user_detail = (user_data,user_recent_replies) => {
    return {
        type: actionTypes.INIT_USER_DETAIL,
        user_data,
        user_recent_replies
    }
}

export const getUserDetail = (loginname) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then((res) => {
            dispatch(init_user_detail(res.data.data,res.data.data.recent_replies))
        }).catch((err) => {
            console.log('数据请求失败');
        })
    }
}