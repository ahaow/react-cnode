import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {actionCreators} from './store'
import {
    DetailBox,
    DetailContainer,
    Panel,
    Sidebar,
    TopicHeader,
    TopicInnner,
    TopicReply,
    ReplyItem,
    ReplyWindow,
    SidebarPanel
} from './style'
import {GetRequ} from './../../utils'
import Loading from './../../common/loading'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorReplyValue: ''
        }
        this.put_top_ref = React.createRef();
        this.CanceCollect = React.createRef();
        this.textDiv = React.createRef();
        this.handleCancelCollected = this.handleCancelCollected.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDetele = this.handleDetele.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleTextComment = this.handleTextComment.bind(this)
        this.handleReply = this.handleReply.bind(this)
        this.handleEditorReply = this.handleEditorReply.bind(this)
        this.handleSubmitReply = this.handleSubmitReply.bind(this)
        this.handleGivePraise = this.handleGivePraise.bind(this)
    }
    handleCancelCollected(e) {
        const id = e.target.getAttribute('data-id');
        const token = JSON.parse(window.localStorage.getItem('UserInfo')).token;
        if (this.CanceCollect.current.className === 'collected') {
            // 取消主题
            this.CanceCollect.current.innerHTML = '收藏'
            this.CanceCollect.current.className = 'collect'
            axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect',{
                accesstoken: token,
                topic_id: id
            }).then((res) => {
                console.log(res)
            })
        } else if (this.CanceCollect.current.className === 'collect') {
            // 收藏
            this.CanceCollect.current.innerHTML = '已收藏'
            this.CanceCollect.current.className = 'collected'
            axios.post('https://cnodejs.org/api/v1/topic_collect/collect',{
                accesstoken: token,
                topic_id: id
            }).then((res) => {
                console.log(res)
            })
        }
    }

    floor(replies) {
        let num = 1;
        for (let i = 0; i < replies.length; i++) {
            replies[i].floor = num++;
        }
        return replies;
    }
    // 去编辑
    handleEdit (id,loginname) {
        this.props.history.push(`/edittopic?id=${id}&loginname=${loginname}`)
    }
    // 删除
    handleDetele() {
        alert('没有删除,因为没有删除的接口')
    }
    // 回复框 显示隐藏
    handleShow(item,event) {
        item.text = ''
        const loginname = item.author.loginname;
        const textDom = event.target.parentNode.parentNode.nextSibling.nextSibling
        if(textDom.style.display === 'none') {
            textDom.style.display = 'block';
            textDom.children[0].value = `@${loginname} `
            item.text = textDom.children[0].value;
        } else {
            textDom.style.display = 'none';
        }
    }
    // 编辑评论
    handleTextComment(item,e) {
        item.text = e.target.value
    }
    // 回复
    handleReply(item,id) {
        if(JSON.parse(window.localStorage.getItem('UserInfo'))) {
            const token = JSON.parse(window.localStorage.getItem('UserInfo')).token
            if(item.text === '') {
                alert('内容不能为空')
            } else {
                axios.post(`https://cnodejs.org/api/v1/topic/${id}/replies`,{
                    accesstoken: token,
                    content: item.text,
                    reply_id: item.reply_id
                }).then((res) => {
                    if(res.data.success) {
                        alert('评论成功');
                        this.props.history.go();
                        window.scrollTo(0,0);
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else {
            alert('请先去登录');
            this.props.history.replace('/login');
        }
        
    }

    // 最下面编辑评论
    handleEditorReply (e) {
        this.setState({
            editorReplyValue: e.target.value
        })
    }
    // 最下面编辑回复
    handleSubmitReply (id) {
        const { editorReplyValue } = this.state;
        if(JSON.parse(window.localStorage.getItem('UserInfo'))) {
            const token = JSON.parse(window.localStorage.getItem('UserInfo')).token;
            if(editorReplyValue === '') {
                alert('内容不能为空');
            } else {
                axios.post(`https://cnodejs.org/api/v1/topic/${id}/replies`,{
                    accesstoken: token,
                    content: editorReplyValue,
                }).then((res) => {
                    if(res.data.success) {
                        alert('评论成功');
                        this.props.history.go();
                        window.scrollTo(0,0);
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else {
            alert('请先去登录');
            this.props.history.replace('/login');
        }
       
    }
    // 点赞
    handleGivePraise(item) {
        alert('没有做哈,原因是有的评论没有reply_id是null,不知道肿么回事')
    }
    render() {
        const { data, author, replies, user_data, user_recent_replies, loadingShow } = this.props;
        // console.log(replies);
        const UserInfo = window
            .localStorage
            .getItem('UserInfo');
        this.floor(replies);
        const put_top = () => {
            if (data.top) {
                return (
                    <span className='put_top'>置顶</span>
                )
            } else {
                return (
                    <span className='put_top none'></span>
                )
            }
        }
        const is_collect = () => {
            if (UserInfo) {
                if (data.is_collect) {
                    return <button
                        ref={this.CanceCollect}
                        data-id={data.id}
                        className={data.is_collect
                        ? 'collected'
                        : 'collect'}
                        onClick={this.handleCancelCollected}>{data.is_collect
                            ? '已收藏'
                            : '收藏'}</button>
                } else if (data.is_collect === false) {
                    return <button
                        ref={this.CanceCollect}
                        data-id={data.id}
                        className={data.is_collect
                        ? 'collected'
                        : 'collect'}
                        onClick={this.handleCancelCollected}>{data.is_collect
                            ? '已收藏'
                            : '收藏'}</button>
                }
            } else {
                return '';
            }
        }

        const otherTopic = () => {
            if (user_recent_replies.length === 0) {
                return "无"
            } else {
                return user_recent_replies.map((item) => {
                    return <p
                        onClick={this
                        .handleGoDetail
                        .bind(this, item.id, item.author.loginname)}
                        key={item.id}>{item.title}</p>
                })
            }
        }
        // 来自 xxx信息
        const tabText = () => {
            switch (data.tab) {
                case 'good': 
                    return '分享';
                case 'share': 
                    return '分享';
                case 'ask':
                    return '问答';
                case 'job': 
                    return '招聘';
                case 'dev':
                    return '客户端评测'
                default:
                    return '';
            }
        }

        // 编辑删除 是否存在
        const is_operation = () => {
            const User = JSON.parse(UserInfo);
            if(User) {
                if(author.loginname === User.loginname) {
                    return (
                        <div className='operation'>
                            <i className='iconfont icon-bianji' onClick={this.handleEdit.bind(this,data.id,data.author.loginname)}></i>
                            <i className='iconfont icon-shanchu' onClick={this.handleDetele}></i>
                        </div>
                    )
                } else {
                    return '';
                }
            } else {
                return '';
            }
        }

        // 判断是否是作者
        const is_author = (item) => {
            if(UserInfo === null) {
                return false;
            } else {
                if(JSON.parse(UserInfo).loginname === item.author.loginname) {
                    return  <span className='author'>作者</span>
                } else {
                    return ''
                }
            }
        }

        return (
            <Fragment>
                <DetailBox>
                    <DetailContainer>
                        <Panel>
                            <TopicHeader>
                                <div className="topic_full_title">
                                    {put_top()}
                                    {data.title}
                                </div>
                                <div className='changes'>
                                    <span>发布于 {moment(data.last_reply_at).fromNow()}</span>
                                    <span>作者 {author.loginname}</span>
                                    <span>{data.visit_count}
                                        次浏览</span>
                                    <span>
                                        来自 {tabText()}</span>
                                    {is_collect()}
                                </div>
                                {is_operation()}
                                
                            </TopicHeader>
                            <TopicInnner dangerouslySetInnerHTML={this.createMarkup(data.content)}></TopicInnner>

                            <TopicReply>
                                {
                                    replies.length ? <div className="header">{replies.length}回复</div> : ''
                                }
                                
                                {replies.map((item, index) => {
                                    return (
                                        <ReplyItem key={item.id} >
                                            <div className="author_content">
                                                <img src={item.author.avatar_url} alt={item.author.loginname}/>
                                                <div className="user_info">
                                                    <span>{item.author.loginname}</span>
                                                    <span className='reply_time'>{item.floor}楼 &nbsp;&nbsp; •{moment(item.create_at).fromNow()}</span>
                                                    {is_author(item)}
                                                </div>

                                                <div className="user_action">
                                                    <i className='iconfont icon-dianzan1' onClick={this.handleGivePraise.bind(this,item)}></i>
                                                    <span>{item.ups.length}</span>
                                                    <i className='iconfont icon-fenxiang' onClick={this.handleShow.bind(this,item)}></i>
                                                </div>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={this.createMarkup(item.content)}
                                                className="reply_content"></div>
                                            <div className='text' style={{display: 'none'}}>
                                                <textarea value={item.text} onChange={this.handleTextComment.bind(this,item)} ></textarea>
                                                <button onClick={this.handleReply.bind(this,item,data.id)}>回复</button>
                                            </div>
                                        </ReplyItem>
                                    )
                                })
}
                            </TopicReply>
                            <ReplyWindow>
                                <div className="header">回复</div>
                                <div className="editor">
                                    <textarea name="editorReply" onChange={this.handleEditorReply}  value={this.state.editorReplyValue} ></textarea>
                                    <button className="editor_buttons" onClick={this.handleSubmitReply.bind(this,data.id)}>回复</button>
                                </div>
                            </ReplyWindow>
                        </Panel>

                        <Sidebar>
                            <SidebarPanel>
                                <div className="title">作者</div>
                                <div className="author">
                                    <img src={user_data.avatar_url} alt={user_data.loginname}/>
                                    <span>{user_data.loginname}</span>
                                </div>
                                <p className='integral'>积分: {user_data.score}</p>
                                <p className='autograph'>“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
                            </SidebarPanel>
                            <SidebarPanel>
                                <div className="title">作者其它话题</div>
                                <div className='otherTopic'>
                                    {otherTopic()}
                                </div>
                            </SidebarPanel>

                            <SidebarPanel>
                                <a
                                    className='AdvertisingMap'
                                    href='https://yunqi.youku.com/?channel=kyz&utm_content=m_51538'>
                                    <img src="https://render.alipay.com/p/s/taobaonpm_click/image_25" alt="1"/>
                                </a>
                                <a
                                    className='AdvertisingMap'
                                    href='https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs'>
                                    <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="2"/>
                                </a>
                                <a className='AdvertisingMap' href='https://www.qiniu.com/cdnprice2018'>
                                    <img src="//static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O" alt="3"/>
                                </a>
                                <a
                                    className='AdvertisingMap'
                                    href='https://www.aliyun.com/product/nodejs?ref=cnode'>
                                    <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="4"/>
                                </a>
                            </SidebarPanel>

                        </Sidebar>
                    </DetailContainer>
                </DetailBox>
                {loadingShow
                    ? <Loading></Loading>
                    : ''}
            </Fragment>

        )
    }
    createMarkup(data) {
        return {__html: data};
    }

    // 点击跳转详情页
    handleGoDetail(id, loginname) {
        this
            .props
            .history
            .push(`/detail?id=${id}&loginname=${loginname}`)
    }
    handleInitAllData() {
        // const token = JSON.parse(window.localStorage.getItem('UserInfo')).token;
        const UserInfo = window
            .localStorage
            .getItem('UserInfo');
        const topicId = GetRequ(this.props.location.search).id
        const loginname = GetRequ(this.props.location.search).loginname
        // 获取主题详情
        if (UserInfo) {
            this
                .props
                .getDetailData(topicId, JSON.parse(UserInfo).token)
        } else {
            this
                .props
                .getDetailData(topicId, '')
        }
        // 获取用户详情
        this
            .props
            .getUserDetail(loginname)
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this
            .props
            .setLoadShow();
        this.handleInitAllData()
    }
    componentWillUpdate() {}

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.location.search !== this.props.location.search) {
            window.scrollTo(0, 0);
            this.handleInitAllData();
            this
                .props
                .setLoadShow();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.getIn(['detailReducer', 'data']),
        author: state.getIn(['detailReducer', 'author']),
        replies: state.getIn(['detailReducer', 'replies']),
        user_data: state.getIn(['detailReducer', 'user_data']),
        user_recent_replies: state.getIn(['detailReducer', 'user_recent_replies']),
        loadingShow: state.getIn(['detailReducer', 'loadingShow'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData(topicId, token) {
            dispatch(actionCreators.getDetailData(topicId, token))
        },
        getUserDetail(loginname) {
            dispatch(actionCreators.getUserDetail(loginname))
        },
        setLoadShow() {
            dispatch(actionCreators.setLoadShow())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);