# webpack-study
## 前端发展阶段
    1.web1.0:静态页面，表单验证等
    2.web2.0:ajax
    3.大前端开发（当代web）：PC, 小程序，移动端，公众号，app，桌面应用
    4.现代web开发模式:采用模块化开发；使用es6等新特性；实时监听开发过程使用热更新；项目结果打包压缩优化；
    5.webpack实现项目工程化
## webpack功能
    1.打包：将不同类型资源按模块处理进行打包
    2.静态：打包后最终产出静态资源
    3.模块：webpack支持不同规范的模块化开发
## webpack初使用
    1.全局安装：sudo npm install webpack webpack-cli webpack-dev-server -g
    2.项目安装：sudo npm install webpack webpack-cli webpack-dev-server --save-dev
    3.项目打包：执行webpack命令:webpack/npx webpack/npx webpack --entry ./src/main.js --output-path ./build(指定文件入口,输出目录等)
    4.webpack.config.js配置文件：配置打包路径等信息
## 安装fira code字体；
## vscode配置live server
## webpack依赖图
## css-loader：
    1.安装：sudo npm i css-loader -D
    2.使用：行内设置/配置文件设置
    3.为什么需要用到loader,webpack不能处理所有类型的文件，需要使用loader转换成可识别的文件
## style-loader的使用：将css-loader处理过的css能够真正生效
    1.安装：sudo npm i style-loader -D
## less-loader
   1.安装less, less-loader: sudo npm i less less-loader -D
## browserslistrc工作流程（获取兼容平台信息）
    1.工程化
    2.兼容性js, css
    3.如何实现兼容
    4.到底要兼容哪些平台
    5.caniuse.com:该网站可以看主流浏览器使用率
    6.在package.json/或者单独文件.browserslistrc配置
## postcss工作流程
    1.是js转换样式的工具
    2.less(less-loader) ==> css ==> css-loader
    3.安装：sudo npm i postcss postcss-cli -D
    4.安装添加前缀的依赖：sudo npm i autoprefixer -D