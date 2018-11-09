import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NewTopicBox, NewTopicContainer, NewTopicLeft, NewTopicRight, Panel} from './style'
import {actionCreators} from './store'
import {GetRequ} from './../../utils';
import axios from 'axios';
class EditTopic extends Component {
    constructor(props) {
        super(props)
        this.handleSubminssion = this
            .handleSubminssion
            .bind(this);
        this.textareaRef = React.createRef();
        this.select = React.createRef();
    }
   
    createMarkup(data) {
        return {__html: data};
    }

    handleSubminssion() {
        const {tabValue, inputValue , textAreaValue} = this.props;
        if (tabValue === '' || tabValue === '请选择') {
            alert('板块不能为空')
            return false;
        } else if (inputValue === '') {
            alert('标题不能为空');
            return false;
        } else if (inputValue.length < 10) {
            alert('标题字数要在10字以上');
            return false;
        } else if (textAreaValue === '') {
            alert('内容不能为空')
            return false;
        } else {
            alert('ok');
            const token = JSON.parse(window.localStorage.getItem('UserInfo')).token;
            const id = this.props.data.id;
            const loginname = this.props.data.author.loginname;
            axios.post(`https://cnodejs.org/api/v1/topics/update`,{
                accesstoken: token,
                topic_id: id,
                tab : tabValue,
                title: inputValue,
                content: textAreaValue 
            }).then((res) => {
                console.log(res)
                if(res.data.success) {
                    alert('修改成功')
                    this.props.history.push(`/detail?id=${id}&loginname=${loginname}`)
                }
            }).catch((err) => {
                console.loh(err);
            })
        }
    }

    render() {
        const {
            tabValue,
            inputValue,
            textAreaValue,
            TabSelectChange,
            InputChange,
            TextAreaChange
        } = this.props;
        const topic_create_warn = () => {
            if (tabValue === 'ask') {
                return '提问时，请遵循<a href="https://gist.github.com/alsotang/f654af8b1fff220e63fcb44846423e6' +
                    'd" target="_black" >《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。'
            } else if (tabValue === 'job') {
                return '为避免被管理员删帖，发帖时请好好阅读 <a href="https://cnodejs.org/topic/541ed2d05e28155f24676a12">' +
                    '《招聘帖规范》</a>'
            } else {
                return '';
            }
        }
        return (
            <NewTopicBox>
                <NewTopicContainer>
                    <NewTopicLeft>
                        <div className="header">
                            <span className='home'>主页</span>&nbsp;
                            <span>/</span>&nbsp;
                            <span>编辑话题</span>
                        </div>
                        <div className="inner">
                            <div className="table-selection">
                                <span className='title'>选择板块:</span>
                                <select ref={this.select} onChange={TabSelectChange} name='tab' id='tab-value'>
                                    <option>请选择</option>
                                    <option value="share">分享</option>
                                    <option value="ask">问答</option>
                                    <option value="job">招聘</option>
                                    <option value="dev">客户端测试</option>
                                </select>
                                <span
                                    className="topic_create_warn"
                                    dangerouslySetInnerHTML={this.createMarkup(topic_create_warn())}></span>
                            </div>
                            <input
                                ref={this.inputRef}
                                className='topic-title'
                                onChange={InputChange}
                                type="text"
                                placeholder='标题字数10字以上'
                                value={inputValue}/>
                            <div>
                                <textarea className='textarea' value={textAreaValue} onChange={TextAreaChange}  />
                            </div>
                            <button className='submission' onClick={this.handleSubminssion}>提交</button>
                        </div>

                    </NewTopicLeft>

                    <NewTopicRight>
                        <Panel>
                            <div className='title'>Markdown 语法参考</div>
                            <ul className='list'>
                                <li>### 单行的标题</li>
                                <li>**粗体**</li>
                                <li>`console.log('行内代码')`</li>
                                <li>[内容](链接)</li>
                                <li>
                                    <a href='https://segmentfault.com/markdown'>Markdown 文档</a>
                                </li>
                            </ul>
                        </Panel>

                        <Panel>
                            <div className='title'>话题发布指南</div>
                            <ul className='list'>
                                <li>尽量把话题要点浓缩到标题里</li>
                                <li>代码含义和报错可在
                                    <a href='https://segmentfault.com/t/node.js'>SegmentFault</a>
                                    提问</li>
                            </ul>
                        </Panel>

                    </NewTopicRight>

                </NewTopicContainer>
            </NewTopicBox>
        )
    }
    componentDidMount() {
        const option = GetRequ(this.props.location.search)
        const {id, loginname} = option;
        this.props.getTopicData(id)
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
        const optionArr = this.select.current.children;
        for(let i=0;i<optionArr.length;i++) {
            let that = optionArr[i];
            if(optionArr[i].value === this.props.data.tab) {
                that.selected = true
            }
        }
    }
}


const mapStateToProps = (state) => {
    return {
       data: state.getIn(['edittopicReducer','data']),
       tabValue:  state.getIn(['edittopicReducer','tabValue']),
       inputValue: state.getIn(['edittopicReducer','inputValue']),
       textAreaValue: state.getIn(['edittopicReducer','textAreaValue'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopicData(id) {
            dispatch(actionCreators.getTopicData(id))
        },
        TabSelectChange(e) {
            dispatch(actionCreators.TabSelectChange(e.target.value))
        },
        InputChange(e) {
            dispatch(actionCreators.InputChange(e.target.value))
        },
        TextAreaChange(e) {
            dispatch(actionCreators.TextAreaChange(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTopic);