import axios from 'axios'
import * as actionTypes from './actionTypes'

export const TabSelectChange = (value) => {
    return {
        type: actionTypes.CHNAGE_TAB_VALUE,
        value
    }
}

export const InputChange = (value) => {
    return {
        type: actionTypes.CHNAGE_INPUT_VALUE,
        value
    }
}

export const NewTopics = (topic_id,suceess) => {
    return {
        type: actionTypes.NEW_TOPICS,
        suceess,
        topic_id
    }
}

export const sendNewTopics = (token , loginname , tabValue,inputValue,editorState1,props) => {
    return (dispatch) => {
        axios.post(' https://cnodejs.org/api/v1/topics',{
            accesstoken: token,
            tab: tabValue,
            title: inputValue,
            content: editorState1
        }).then((res) => {
            console.log(res)
            console.log(props);
            if(res.data.success) {
                alert('发布成功');
                props.history.push(`/detail?id=${res.data.topic_id}&loginname=${loginname}`)
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}
