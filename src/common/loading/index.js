import React , { Component } from 'react';
import {
    LoadContainer
} from './style'
import loadgif from '../../assets/ajax-loader.gif'
class Loading extends Component {
    render() {
        return (
            <LoadContainer>
                <img src={loadgif} alt="加载中..."/>
            </LoadContainer>
        )
    }
}
export default Loading;