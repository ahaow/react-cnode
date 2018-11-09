import axios from 'axios'
import * as actionTypes from './actionTypes'

export const getTopicDataAction = (data,tabValue,inputValue,textAreaValue) => {
    return {
        type: actionTypes.GET_TOPIC_DATA,
        data,
        tabValue,
        inputValue,
        textAreaValue
    }
}
export const getTopicData = (id) => {
    return (dispatch) => {
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then((res) => {
                if(res.data.success) {
                    dispatch(getTopicDataAction(res.data.data,res.data.data.tab,res.data.data.title,res.data.data.content))
                }
            }).catch((err) => {
                console.log(err);
            })
    }
}

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

export const TextAreaChange = (value) => {
    return {
        type: actionTypes.CHNAGE_TEXTAREA_VALUE,
        value
    }
}