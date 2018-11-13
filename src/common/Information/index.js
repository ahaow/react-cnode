import React , {Fragment} from 'react';
import { 
    InformationBox,
    InnerAds
} from './style'

const Information = () => {
    return (
        <Fragment>
            <InformationBox>
                <InnerAds>
                    <ul>
                        <li><a href="https://www.aliyun.com/product/nodejs?ref=cnode"><img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="1"/></a></li>
                        <li><a href="https://yunqi.youku.com/?channel=kyz&utm_content=m_51538"><img src="https://render.alipay.com/p/s/taobaonpm_click/image_25" alt="2"/></a></li>
                        <li><a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs"><img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="3"/></a></li>
                        <li><a href="https://www.qiniu.com/cdnprice2018"><img src="//static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O" alt="4"/></a></li>
                    </ul>
                </InnerAds>
                <InnerAds>
                    <div className="title">友情社区</div>
                    <ul>
                        <li><a href="https://ruby-china.org/"><img className='community-img' src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="ruby"/></a></li>
                        <li><a href="http://golangtc.com/"><img className='community-img' src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="goland"/></a></li>
                        <li><a href="https://laravel-china.org/"><img className='community-img' src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="php"/></a></li>
                        <li><a href="https://testerhome.com/"><img className='community-img' src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="testerhome"/></a></li>
                    </ul>
                </InnerAds>
                <InnerAds>
                    <div className="title">客户端二维码</div>
                    <div className="ewm">
                        <img src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="ewm"/>
                    </div>
                </InnerAds>
            </InformationBox>
        </Fragment>
    )
}

export default Information;