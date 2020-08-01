
# Conde 网页的 react版
 > 新手 react 入门项目，学react 的基本使用和全家桶
## react-cnode
- react 16.13
- react-router-dom
- hook 和 class 组件
- redux 简易使用

## 目录结构
```
.
├── src
│   ├── index.js                       # 项目入口
│   ├── App.js                         # 组件入口
│   ├── setupProxy.js                  # 代理配置       
│   ├── Context.js                     # Context API 
│   ├── Components
│   │   ├── backtop
│   │   │   └── Backtop.js              # 返回顶部
│   │   ├── header
│   │   │   └── Header.js               # 头部
│   │   ├── pagination
│   │   │   └── Pagination.js           # 分页
│   │   ├── panel
│   │   │   └── Panel.js                # 面板
│   │   ├── personal
│   │   │   └── Personal.js             # 侧边栏
│   │   ├── tabar
│   │   │   └── Tabar.js                # tabar
│   │   ├── topicslist
│   │   │   └── TopicsList.js           # 话题列表
│   │   └── topics
│   │       └── Topics.js               # 话题
│   ├── router
│   │   ├── RouteLink.js                # 路由组件
│   │   └── router.js                   # 路由配置
│   ├── redux                           # 状态管理
│   │   ├── reducer.js    
│   │   ├── store.js    
│   │   └── action.js                                    
│   └── views
│       ├── index
│       │   └── Index.js                # 主页
│       ├── login
│       │   └── Login.js                # 登录页
│       ├── message
│       │   └── Message.js              # 未读消息页
│       ├── collections
│       │   └── Collections.js          # 话题详情页
│       ├── user
│       │   └── User.js                 # 用户详情页/个人主页
│       ├── About.js                    # 关于
│       ├── API.js                      # API
│       ├── Getstart.js                 # 新手入门
│       └── Details.js                  # 文章详情
```

