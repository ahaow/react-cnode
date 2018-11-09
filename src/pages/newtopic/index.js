import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NewTopicBox, NewTopicContainer, NewTopicLeft, NewTopicRight, Panel} from './style'
import {convertToRaw} from 'draft-js'
import draftToMarkdown from 'draftjs-to-markdown';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {actionCreators} from './store'
class Newtopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: undefined,
            editorState1: ''
        }
        this.textRef = React.createRef();
        this.onEditorStateChange = this
            .onEditorStateChange
            .bind(this);
        this.handleSubminssion = this
            .handleSubminssion
            .bind(this);
        this.textareaRef = React.createRef();
    }
    createMarkup(data) {
        return {__html: data};
    }

    onEditorStateChange = (editorState) => {
        this.setState({editorState});
    };

    handleSubminssion() {
        const {editorState } = this.state;
        const token = JSON.parse(window.localStorage.getItem('UserInfo')).token;
        const loginname = JSON.parse(window.localStorage.getItem('UserInfo')).loginname;
        const {tabValue, inputValue , sendNewTopics} = this.props;
        if(tabValue === '' || tabValue === '请选择') {
            alert('板块不能为空')
            return false;
        } else if (inputValue === '') {
            alert('标题不能为空');
            return false;
        } else if (inputValue.length < 10) {
            alert('标题字数要在10字以上');
            return false;
        } else if (editorState === undefined) {
            alert('内容不能为空')
            return false;
        } else {
            console.log(editorState)
            alert('ok');
            this.setState({
                editorState1: this.textareaRef.current.value
            },() => {
                sendNewTopics(token , loginname , tabValue, inputValue, this.state.editorState1,this.props)
            })
        }
    }
    render() {
        const {editorState} = this.state;
        const {tabValue, inputValue, TabSelectChange, InputChange} = this.props;
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
                            <span>发布话题</span>
                        </div>
                        <div className="inner">
                            <div className="table-selection">
                                <span className='title'>选择板块:</span>
                                <select onChange={TabSelectChange} name='tab' id='tab-value'>
                                    <option >请选择</option>
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
                                className='topic-title'
                                onChange={InputChange}
                                type="text"
                                placeholder='标题字数10字以上'
                                value={inputValue}/>
                            <div>
                                {/* <Editor
                                    localization={{
                                    locale: 'zh'
                                }}
                                    editorState={editorState}
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                    onEditorStateChange={this.onEditorStateChange}/>*/}
                                <Editor
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                    onEditorStateChange={this.onEditorStateChange}/>
                                <textarea
                                    ref={this.textareaRef}
                                    disabled
                                    style={{display:'none'}}
                                    value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}/>
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
        window
            .localStorage
            .setItem('user', 'ahaow');
    }

}

const mapStateToProps = (state) => {
    return {
        tabValue: state.getIn(['newtopicReducer', 'tabValue']),
        inputValue: state.getIn(['newtopicReducer', 'inputValue'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        TabSelectChange(e) {
            dispatch(actionCreators.TabSelectChange(e.target.value))
        },
        InputChange(e) {
            dispatch(actionCreators.InputChange(e.target.value))
        },
        sendNewTopics(token , loginname , tabValue, inputValue, editorState1, props) {
            dispatch(actionCreators.sendNewTopics(token , loginname , tabValue, inputValue, editorState1, props))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newtopic);