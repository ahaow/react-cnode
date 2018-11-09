import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from './store'
import {
    HomeContainer,
    ContentLeft,
    ContentRight,
    UserInfo,
    LoginBox,
    Issue,
    NoReplyTopic
} from './style'
import HomeHeader from './components/HomeHeader'

class Home extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const UserInfo = JSON.parse(window.localStorage.getItem('UserInfo'));
        if(UserInfo) {
            const loginname = UserInfo.loginname;
            this.props.init_user_info(loginname)
        } else {
            return;
        }

    }
    render() {
        const User = window
            .localStorage
            .getItem('UserInfo')
        const { userinfo } = this.props;
        return (
            <Fragment>
                <HomeContainer>
                    <ContentLeft>
                        <HomeHeader></HomeHeader>
                        {this.props.children}
                    </ContentLeft>
                    <ContentRight>
                        {User
                            ? <Fragment>
                                    <UserInfo>
                                        <div className='userinfo-title'>个人信息</div>
                                        <div className='userinfo-content'>
                                            <div className="author">
                                                <img
                                                    className='avatar_url'
                                                    src={userinfo.avatar_url}
                                                    alt={userinfo.loginname}/>
                                                <span className='loginname'><Link to='/user'>{userinfo.loginname}</Link></span>
                                            </div>
                                            <div className="integral">积分: {userinfo.score}</div>
                                            {/* <p className='signature' ref={this.myRef}>“ 生活就是改变 ”</p> */}
                                        </div>
                                    </UserInfo>
                                    <Issue>
                                        <Link to='/newtopic'>发布话题</Link>
                                    </Issue>
                                </Fragment>
                            : <LoginBox>
                                <p>CNode：Node.js专业中文社区</p>
                                <Link to='/login' className='login'>去登录</Link>
                            </LoginBox>
                        }
                        {/*
                            <NoReplyTopic>
                                <div className='title'>无人回复的话题</div>
                                <ul className='topic-list'>
                                    <li>一个想法，做你想做的事</li>
                                    <li>双十一阿里云打折参团</li>
                                    <li>一个Time TodoList实例了解redux在小程序wepy的使用</li>
                                    <li>大家有没有用nodejs调用过旺店通接口？</li>
                                    <li>阿里云一折优惠</li>
                                </ul>
                            </NoReplyTopic>

                        */}
                        {/**
                            <NoReplyTopic>
                                <div className='title'>积分榜   TOP 100 >></div>
                                <ul className='topic-list'>
                                    <li>21305   i5ting</li>
                                    <li>15220   alsotang</li>
                                    <li>9350    leapon</li>
                                    <li>8760    jiyinyiyong</li>
                                    <li>7370    atian25</li>
                                    <li>7030    yakczh</li>
                                    <li>6660    im-here</li>
                                    <li>6040    DevinXian</li>
                                    <li>5605    chapgaga</li>
                                    <li>5330    magicdawn</li>
                                </ul>
                            </NoReplyTopic>
                        */}

                        <NoReplyTopic>
                            <div className='title'>友情社区</div>
                            <ul className='topic-list'>
                                <li>
                                    <a href='https://ruby-china.org/'>
                                        <img
                                            src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"
                                            alt="ruby-china"/>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://golangtc.com/'>
                                        <img
                                            src="//static2.cnodejs.org/public/images/golangtc-logo.png"
                                            alt="ruby-china"/>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://laravel-china.org/'>
                                        <img
                                            src="//static2.cnodejs.org/public/images/phphub-logo.png"
                                            alt="ruby-china"/>
                                    </a>
                                </li>
                            </ul>
                        </NoReplyTopic>

                        <NoReplyTopic>
                            <div className='title'>二维码</div>
                            <div className="inner">
                                <img src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt=""/>
                            </div>
                        </NoReplyTopic>

                    </ContentRight>
                </HomeContainer>

            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userinfo: state.getIn(['homeReducer', 'userinfo']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init_user_info(loginname) {
            dispatch(actionCreators.init_user_info(loginname))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)