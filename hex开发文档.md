### 创建vue项目
```
vue create message-wall
```

### 完善开发目录

#### 默认开发目录
* |-- undefined
    * |-- .browserslistrc
    * |-- .editorconfig
    * |-- .eslintrc.js
    * |-- .gitignore
    * |-- babel.config.js
    * |-- hex开发文档.md
    * |-- jsconfig.json
    * |-- lint-staged.config.js
    * |-- package.json
    * |-- README.md
    * |-- vue.config.js
    * |-- yarn.lock
    * |-- public
    * |   |-- favicon.ico
    * |   |-- index.html
    * |-- src
        * |-- App.vue
        * |-- main.js
        * |-- assets
        * |-- components
        * |-- router
        * |   |-- index.js
        * |-- store
        * |   |-- index.js
        * |-- views'

#### 完善目录
* |-- message-wall
    * |-- .browserslistrc
    * |-- .editorconfig
    * |-- .eslintrc.js
    * |-- .gitignore
    * |-- babel.config.js
    * |-- directoryList.md
    * |-- hex开发文档.md
    * |-- jsconfig.json
    * |-- lint-staged.config.js
    * |-- package.json
    * |-- README.md
    * |-- vue.config.js
    * |-- yarn.lock
    * |-- mock/               &emsp;// 模拟数据
    * |-- public/
    * |   |-- favicon.ico
    * |   |-- index.html
    * |-- src/
        * |-- App.vue
        * |-- main.js
        * |-- api
        * |-- assets/         &emsp;// 静态资源目录
        * |   |-- fonts
        * |   |-- images
        * |-- components/     &emsp;// 公共组件目录
        * |-- router/         &emsp;// 路由配置目录
        * |   |-- index.js  
        * |-- store/          &emsp;// 状态管理目录    
        * |   |-- index.js
        * |-- utils/          &emsp;// 工具函目录
        * |-- views/          &emsp;// 页面目录
    * |-- static/             &emsp;// 静态资源目录，不会被打包

### 全局引入less和字体图标

### 引入ElementUI-plus框架

### 配置路由，完成页面的布局，实现路由跳转
```
/home    : 主页
/message : 留言墙
/football: 足球往事
/share   : 个人分享
```