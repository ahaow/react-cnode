import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from './store';
import {
    UnreadMsgBox,
    UnreadMsgContainer,
    UnreadMsgLeft,
    UnreadMsgRight,
    UnreadMsgPanel,
    UnreadMessagePanel
} from './style'
import Information from './../../common/Information'
class UnreadMsg extends Component {
    createMarkup() {
        return {__html: 'First &middot; Second'};
    }
    render() {
        const {has_read_messages, hasnot_read_messages, UserData} = this.props;
        const loginname = JSON
            .parse(window.localStorage.getItem('UserInfo'))
            .loginname;
        return (
            <UnreadMsgBox>
                <UnreadMsgContainer>
                    <UnreadMsgLeft>
                        <UnreadMsgPanel>
                            <div className="header">
                                <span>主页</span>
                                <span>/</span>
                                <span>新消息</span>
                            </div>
                            <div className="content">
                                {hasnot_read_messages.length <= 0
                                    ? '无消息'
                                    : hasnot_read_messages.map((item) => {
                                        return (item.type === 'reply'
                                            ? <li key={item.id}>
                                                    <span>{item.author.loginname}</span>
                                                    <span>回复了你的话题</span>
                                                    <Link to={`/detail?id=${item.topic.id}&loginname=${loginname}`}>{item.topic.title}</Link>
                                                </li>
                                            : <li key={item.id}>
                                                <span>{item.author.loginname}</span>
                                                <span>在话题</span>
                                                <Link to={`/detail?id=${item.topic.id}&loginname=${item.author.loginname}`}>{item.topic.title}</Link>
                                                <span className='at'>中@了你</span>
                                            </li>)
                                    })
}
                            </div>
                        </UnreadMsgPanel>
                        <UnreadMsgPanel>
                            <div className="header">
                                <span className='PastInfo'>过往信息</span>
                            </div>
                            <ul className="pastinfo-content">
                                {has_read_messages.length <= 0
                                    ? '无消息'
                                    : has_read_messages.map((item) => {
                                        return (item.type === 'reply'
                                            ? <li key={item.id}>
                                                    <span>{item.author.loginname}</span>
                                                    <span>回复了你的话题</span>
                                                    <Link to={`/detail?id=${item.topic.id}&loginname=${loginname}`}>{item.topic.title}</Link>
                                                </li>
                                            : <li key={item.id}>
                                                <span>{item.author.loginname}</span>
                                                <span>在话题</span>
                                                <Link to={`/detail?id=${item.topic.id}&loginname=${item.author.loginname}`}>{item.topic.title}</Link>
                                                <span className='at'>中@了你</span>
                                            </li>)
                                    })
}
                            </ul>
                        </UnreadMsgPanel>
                    </UnreadMsgLeft>
                    <UnreadMsgRight>
                        <UnreadMessagePanel>
                            <div className="title">个人信息</div>
                            <div className="content">
                                <img src={UserData.avatar_url} alt={UserData.loginname}/>
                                <span><Link to='/user'>{UserData.loginname}</Link></span>
                                <p>积分: {UserData.score}</p>
                            </div>
                            <div className='release-topice'>
                                <Link to='/newtopic'>发布话题</Link>
                            </div>
                        </UnreadMessagePanel>
                        <div className='Information'>
                            <Information></Information>
                        </div>
                    </UnreadMsgRight>
                </UnreadMsgContainer>
            </UnreadMsgBox>
        )
    }
    componentDidMount() {
        const token = JSON
            .parse(window.localStorage.getItem('UserInfo'))
            .token;
        const loginname = JSON
            .parse(window.localStorage.getItem('UserInfo'))
            .loginname;
        this
            .props
            .getUserData(loginname)
        this
            .props
            .getUnreadMsg(token)

    }
}

const mapStateToProps = (state) => {
    return {
        UserData: state.getIn(['unreadmessageReducer', 'UserData']),
        has_read_messages: state.getIn(['unreadmessageReducer', 'has_read_messages']),
        hasnot_read_messages: state.getIn(['unreadmessageReducer', 'hasnot_read_messages'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData(loginname) {
            dispatch(actionCreators.getUserData(loginname))
        },
        getUnreadMsg(token) {
            dispatch(actionCreators.getUnreadMsg(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnreadMsg);