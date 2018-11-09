import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {HeaderNav, HeaderContainer, HeaderLeft, HeaderRight, NavList} from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClearStorage = this.handleClearStorage.bind(this)
    }
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    componentWillMount() {
    }

    componentWillUpdate(nextProps, nextState) {
    }
    
    handleClearStorage () {
        window.localStorage.removeItem('UserInfo')
        this.forceUpdate();
        this.context.router.history.push('/')
    }
    render() {
        const UserInfo = window.localStorage.getItem('UserInfo')
        return (
            <HeaderNav>
                <HeaderContainer>
                    <HeaderLeft>
                        <a className='logo' href='/'>
                            <img src='//static2.cnodejs.org/public/images/cnodejs_light.svg' alt=''></img>
                        </a>
                        <form>
                            <input type="text"/>
                        </form>

                    </HeaderLeft>

                    <HeaderRight>

                        {UserInfo
                            ? <NavList>
                                    <li>
                                        <Link to='/'>首页</Link>
                                    </li>
                                    <li>未读消息</li>
                                    <li>新手入门</li>
                                    <li>API</li>
                                    <li>关于</li>
                                    <li>设置</li>
                                    <li onClick={this.handleClearStorage} >退出</li>
                                </NavList>
                            : <NavList>
                                <li>
                                    <Link to='/'>首页</Link>
                                </li>
                                <li>新手入门</li>
                                <li>API</li>
                                <li>关于</li>
                                <li>注册</li>
                                <li>
                                    <Link to='/login'>登录</Link>
                                </li>
                            </NavList>
}

                    </HeaderRight>
                </HeaderContainer>
            </HeaderNav>
        )
    }
    componentDidUpdate(prevProps, prevState) {
    }
}

export default Header;