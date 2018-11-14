
## react-cnode-pc版

## 项目说明

#### 基于 react + react-router + redux +  styled-components + react-thunk + immutable的React版Cnode社区

## 项目截图

![](https://i.imgur.com/UzIcwoB.png)

![](https://i.imgur.com/jnZQu4V.png)

![](https://i.imgur.com/fBL0E2t.png)

![](https://i.imgur.com/bE28feS.png)

![](https://i.imgur.com/9gw1LWT.png)

![](https://i.imgur.com/jBkC1jR.png)

![](https://i.imgur.com/TdgBhQm.png)

![](https://i.imgur.com/K0b5jH3.png)

![](https://i.imgur.com/0jm12pY.png)

### 项目目录

```

src
├── App.js                            // 中间内容组件路由容器
├── common                            // 公共组件
│   ├── footer                        // 底部组件
│   │   └── index.js
│   ├── header                     	  // 头部组件
│   │   ├── index.js
│   │   └── style.js
│   ├── Information                  // 右侧信息广告组件
│   │   ├── index.js
│   │   └── style.js
│   └── loading                        // loading组件
│       ├── index.js
│       └── style.js
├── index.js                          // 根组件
├── router.js    					  // 路由配置组件
├── pages                            
│   ├── detail                        // 话题详情组件
│   │   ├── index.js
│   │   └── style.js
│   ├── edittopic                     // 编辑话题组件
│   │   ├── index.js
│   │   └── style.js
│   ├── home                        	  // 首页组件
│   │   ├── index.js
│   │   └── style.js
│   ├── login                         // 登录组件
│   │   ├── index.js
│   │   └── style.js
│   ├── newtopic                       // 发表话题组件
│   │   ├── index.js
│   │   └── style.js
│   ├── nofound                       // 404组件
│   │   ├── index.js
│   │   └── style.js
│   ├── topiccollect                  // 话题收藏组件
│   │   ├── index.js
│   │   └── style.js
│   ├── unreadmessage                  // 未读消息组件
│   │   ├── index.js
│   │   └── style.js
│   └── user                          // 用户详情组件
│       ├── index.js
│       └── style.js
├── serviceWorker.js
├── store                             // redux
│   ├── index.js                      // store
│   └── reducer.js                    // 导入各个组件的reducer并合成一个reducer
├── style.js                          // 全局样式                   
└── utils                             // 工具函数
    └── index.js                      // 解析url search函数方法

```



### 功能

```
  - 主题首页，主题详情
  - 新建主题，编辑主题
  - 收藏主题，取消主题，用户所收藏的主题
  - 新建评论
  - 用户详情，登录
  - 获取未读消息数、获取已读和未读消息
```


### 构建应用

``` bash
# 安装依赖
npm install

# 热加载服务运行在 localhost:3000
npm start

# 打包项目（打包完成后项目会存放到build目录下）
npm run build
```




