import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
    TopicCollectBox,
    TopicCollectContainer,
    TopicCollectLeft,
    TopicCollectRight,
    TopicCollectPanel
} from './style'
import Information from './../../common/Information'
class TopicCollect extends Component {
    componentDidMount() {
        const loginname = JSON.parse(window.localStorage.getItem('UserInfo')).loginname;
        this.props.getUserData(loginname)
        this.props.getTopicCollect(loginname)
    }
    handleGoDetail (id,loginname) {
        this.props.history.push(`/detail?id=${id}&loginname=${loginname}`)
    }
    render() {
        const  { userData, collectData } = this.props;
        console.log(collectData)
        return (
            <TopicCollectBox>
                <TopicCollectContainer>
                    <TopicCollectLeft>
                    <div className="header">
                        <Link to='/'>主页</Link>&nbsp;&nbsp;/&nbsp;&nbsp;{collectData.loginname} 收藏的话题</div>
                        <ul className="topic_collec_list">
                            {
                                collectData.map((item) => {
                                    const title = () => {
                                        if(item.top) {
                                            return <div className="put_good">置顶</div>
                                        } else if (item.good) {
                                            return <div className="put_good">精华</div>
                                        } else {
                                            return ''
                                        }
                                    }
                                    return (
                                        <li key={item.id}>
                                            <img src={item.author.avatar_url} alt={item.author.loginname}/>
                                            <div className="count">
                                                <span className="reply_count">{item.reply_count}</span>
                                                <span className='count_seperator'>/</span>
                                                <span className="visit_count">{item.visit_count}</span>
                                            </div>
                                            {title()}
                                            <div onClick={this.handleGoDetail.bind(this,item.id,item.author.loginname)} className='title'>{item.title}</div>
                                            <div className='last_active_time'>{moment(item.last_reply_at, "YYYYMMDD").fromNow()}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </TopicCollectLeft>
                    <TopicCollectRight>
                        <TopicCollectPanel>
                            <div className="title">个人信息</div>
                            <div className="content">
                                <img
                                    src={userData.avatar_url}
                                    alt={userData.loginname}/>
                                <span>{userData.loginname}</span>
                                <p>积分: {userData.score}</p>
                            </div>
                            <div className='release-topice'>
                                <Link to='/newtopic'>发布话题</Link>
                            </div>
                        </TopicCollectPanel>
                    <div className='Information'>
                        <Information></Information>
                    </div>
                    
                    </TopicCollectRight>
                </TopicCollectContainer>
            </TopicCollectBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.getIn(['topicCollectReducer','userData']),
        collectData: state.getIn(['topicCollectReducer','collectData']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData(loginname) {
            dispatch(actionCreators.getUserData(loginname))
        },
        getTopicCollect(loginname) {
            dispatch(actionCreators.getTopicCollect(loginname))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TopicCollect);