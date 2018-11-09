import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {ContentHeader} from '../style'

class HomeHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            HeaderList: [
                {
                    to: 'all',
                    title: '全部'
                },{
                    to: 'good',
                    title: '精华'
                },{
                    to: 'share',
                    title: '分享'
                },{
                    to: 'ask',
                    title: '问答'
                },{
                    to: 'job',
                    title: '招聘'
                },{
                    to: 'dev',
                    title: '客户端测试'
                }
            ]
        }
    }


    render() {
        return (
            <ContentHeader>
                {
                    this.state.HeaderList.map((item,index) => {
                        return (
                            <span key={index}>
                                <NavLink activeClassName='active' to={`/home/${item.to}`}>{item.title}</NavLink>
                            </span>
                        )
                    })
                }
            </ContentHeader>
        )
    }
}

export default HomeHeader;