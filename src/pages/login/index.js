import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {LoginBox, LoginContainer, LoginLeft, LoginRight} from './style'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        this.setState({
            inputVal: e.target.value
        })
    }

    handleClick() {
        const { inputVal } = this.state;
        if(inputVal === '') {
            alert('AccessToken不能为空')
            return false;
        } else {
            axios.post('https://cnodejs.org/api/v1/accesstoken',{
                accesstoken: inputVal
            }).then((res) => {
                if(res.data.success) {
                    res.data.token = inputVal;
                    const UserObj = Object.assign({},res.data);
                    window.localStorage.setItem('UserInfo',JSON.stringify(UserObj));
                    alert('登录成功');
                    this.props.history.replace('/')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }



    render() {
        return (
            <LoginBox>
                <LoginContainer>
                    <LoginLeft>
                        <div className="header"><Link to='/'>主页</Link> / 登陆</div>
                        <div className="content">
                            <div className="from">
                                <span>AccessToken:</span>
                                <input onChange={this.handleChange} value={this.state.inputVal} type="text" name='token' placeholder='请输入你的Access Token' />
                                <button onClick={this.handleClick} >登录</button>
                            </div>
                        </div>
                    </LoginLeft>
                    <LoginRight>
                        <div className="title">关于</div>
                        <p>CNode：Node.js专业中文社区</p>
                        <p>在这里你可以：</p>
                        <ul>
                            <li>向别人提出你遇到的问题</li>
                            <li>帮助遇到问题的人</li>
                            <li>分享自己的知识</li>
                            <li>和其它人一起进步</li>
                        </ul>
                    </LoginRight>
                </LoginContainer>
            </LoginBox>
        )
    }
}

export default Login;