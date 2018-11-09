import React , { Component } from 'react';
import {
    FooterBox,
    FooterContainer
} from './style'

class Footer extends Component {

    render() {
        return (
            <FooterBox>
                <FooterContainer>
                    <p className='title'>RSS | 源码地址</p>
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>
                        服务器搭建在
                        <img src="//static2.cnodejs.org/public/images/digitalocean.png" alt=""/>
                        存储赞助商为
                        <img src="//static2.cnodejs.org/public/images/qiniu.png" alt=""/>
                    </p>
                    <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="/">DigitalOcean(https://www.digitalocean.com/)</a></p>
                </FooterContainer>
            </FooterBox>
        )
    }
}

export default Footer;