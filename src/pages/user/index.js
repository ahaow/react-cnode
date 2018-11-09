import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
    UserBox,
    UserContainer,
    UserLeft,
    UserRight,
    Establish,
    UserPanel
} from './style'
import {actionCreators} from './store'
import Information from './../../common/Information'
class User extends Component {
    componentDidMount() {
        const loginname = JSON
            .parse(window.localStorage.getItem('UserInfo'))
            .loginname
        this.props.getUserData(loginname)
        this.props.getUserCollection(loginname)
    }

    handleGoDetail(id,loginname) {
        this.props.history.push(`/detail?id=${id}&loginname=${loginname}`)
    }
    render() {
        const {data, recent_topics, recent_replies , user_collect} = this.props;
        return (
            <UserBox>
                <UserContainer>
                    <UserLeft>
                        <div className="header">
                            <Link to='/'>主页</Link>
                            / 个人</div>
                        <div className="UserContent">
                            <div className="user-info">
                                <img src={data.avatar_url} alt={data.loginname}/>
                                <span>{data.loginname}</span>
                            </div>
                            <p className='integral'>{data.score}
                                积分</p>
                            <p className='topic-collection'><Link to='/topic-collect'>{user_collect}个话题收藏</Link></p>
                            <div className='github'>
                                <i className='iconfont icon-github'></i>
                                <a href={`https://github.com/${data.loginname}`} rel="noopener noreferrer" target="_blank">@{data.loginname}</a>
                            </div>
                            <p className='register-date'>注册时间 {moment(data.create_at, "YYYYMMDD").fromNow()}</p>
                        </div>
                        <Establish>
                            <div className="title">最近创建的话题</div>
                            <ul className='Establish-list'>
                                {recent_topics.map((item) => {
                                    return (
                                        <li key={item.id} onClick={this.handleGoDetail.bind(this,item.id,item.author.loginname)} >
                                            <img
                                                src={item.author.avatar_url}
                                                alt={item.author.loginname}/> {/*
                                                <div className='comments'>
                                                <span>0</span>
                                                /
                                                <span>7</span>
                                            </div>
                                            */}
                                            <div className='topic_title'>{item.title}</div>
                                            <span className='create_at'>{moment(item.last_reply_at, "YYYYMMDD").fromNow()}</span>
                                        </li>
                                    )
                                })
                            }

                            </ul>
                        </Establish>

                        <Establish>
                            <div className="title">最近参与的话题</div>
                            <ul className='Establish-list'>
                                {recent_replies.map((item) => {
                                    return (
                                        <li key={item.id} onClick={this.handleGoDetail.bind(this,item.id,item.author.loginname)}>
                                            <img
                                                src={item.author.avatar_url}
                                                alt={item.author.loginname}/>
                                            {/*
                                                <div className='comments'>
                                                    <span>0</span>
                                                    /
                                                    <span>7</span>
                                                </div>
                                            */}
                                            <div className='topic_title'>{item.title}</div>

                                            <div className='create_at'>
                                                {/*
                                                    <img
                                                    src="https://avatars3.githubusercontent.com/u/28808091?v=4&s=120"
                                                    alt="ahaow"/>
                                                */}
                                                <span>{moment(item.last_reply_at, "YYYYMMDD").fromNow()}</span>
                                            </div>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </Establish>

                    </UserLeft>
                    <UserRight>
                        <UserPanel>
                            <div className="title">个人信息</div>
                            <div className="content">
                                <img
                                    src={data.avatar_url}
                                    alt={data.loginname}/>
                                <span>ahaow</span>
                                <p>积分: {data.score}</p>
                            </div>
                            <div className='release-topice'>
                                <Link to='/newtopic'>发布话题</Link>
                            </div>
                        </UserPanel>
                        <div className='Information'>
                            <Information></Information>
                        </div>
                    </UserRight>
                </UserContainer>
            </UserBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.getIn(['userReducer', 'data']),
        recent_replies: state.getIn(['userReducer', 'recent_replies']),
        recent_topics: state.getIn(['userReducer', 'recent_topics']),
        user_collect: state.getIn(['userReducer', 'user_collect']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData(loginname) {
            dispatch(actionCreators.getUserData(loginname))
        },
        getUserCollection(loginname) {
            dispatch(actionCreators.getUserCollection(loginname))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
