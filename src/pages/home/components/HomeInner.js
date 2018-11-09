import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './../store'
import {ContentInner, TopicList, TopicListCell, PageContainer} from './../style';
import {Pagination} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Loading from '../../../common/loading'
class HomeInner extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    topic_title (item) {
        if(item.top) {  item.tab = '置顶';item.className = 'put_top';
        } else if(item.good) { 
            item.tab = '精华'; item.className = 'put_top'
        } else if(item.tab === 'share') { 
            item.tab = '分享'; item.className = 'put_other'
        } else if(item.tab === 'ask') { 
            item.tab = '问答'; item.className = 'put_other'
        } else if(item.tab === 'job') { 
            item.tab = '招聘'; item.className = 'put_other'
        } else if(item.tab === 'dev') { 
            item.tab = '测试'; item.className = 'put_other'
        }
    }

    render() {
        const {list , load , PaginationCurrent} = this.props;
        return (
            <Fragment>
                <ContentInner>
                    <TopicList>
                        {list.map((item, index) => {
                            this.topic_title(item)
                            return (
                                <TopicListCell onClick={this.handleGoDetail.bind(this,item.id,item.author.loginname)} key={index}>
                                    <div className='user_avtar'>
                                        <img src={item.author.avatar_url} alt={item.author.loginname}></img>
                                    </div>
                                    <span className='reply_count'>
                                        <span className='count_of_replies'>{item.reply_count}</span>
                                        <span className='count_seperator'>/</span>
                                        <span className='count_of_visits'>{item.visit_count}</span>
                                    </span>
                                    <div className="topic_title_wrapper">
                                        <span className={item.className}>{item.tab}</span>
                                        <span className='topic_title'>{item.title}</span>
                                    </div>
                                    <div className="last_time">
                                        {/* <img src={item.author.avatar_url} alt={item.author.loginname}/> */}
                                        <span className="last_active_time">{moment(item.last_reply_at).fromNow()}</span>
                                    </div>
                                </TopicListCell>
                            )
                        })
                    }
                    </TopicList>
                    <PageContainer>
                        <Pagination
                            ref={this.inputRef}
                            className="pagination"
                            onChange={this
                            .handlePagination
                            .bind(this)}
                            defaultCurrent={1}
                            current={PaginationCurrent}
                            pageSize={40}
                            total={2000}></Pagination>
                    </PageContainer>
                </ContentInner>
                {load ? <Loading></Loading> : null}
            </Fragment>
        )
    }

    handlePagination(page, pageSize) {
        this.props.change_load_true();
        this.props.init_home_data(this.props.match.params.id, page);
        this.props.handleChangePage(page)
        window.scrollTo(0, 0)
    }

    // 点击跳转详情页
    handleGoDetail(id,loginname) {
        this.props.history.push(`/detail?id=${id}&loginname=${loginname}`)
    }
    componentDidMount() {
        this.props.change_load_true();
        const id = this.props.match.params.id;
        this.props.init_home_data(id, 1);
    }
    componentDidUpdate(prevProps, prevState) {
        // 比较prevProps 和  this.props.match.params.id 有没有差别 如果有再更新ajax请求
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.change_load_true();
            this.props.init_home_data(this.props.match.params.id, 1);
            this.props.handlePage();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['homeReducer', 'list']),
        PaginationCurrent: state.getIn(['homeReducer', 'PaginationCurrent']),
        load: state.getIn(['homeReducer', 'load'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init_home_data(id, page) {
            dispatch(actionCreators.getHomeList(id, page))
        },
        handleChangePage(page) {
            dispatch(actionCreators.change_page(page))
        },
        handlePage() {
            dispatch(actionCreators.handle_page())
        },
        change_load_false() {
            dispatch(actionCreators.change_load_false())
        },
        change_load_true() {
            dispatch(actionCreators.change_load_true())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeInner);
